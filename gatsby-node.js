
const _ = require('lodash')
const Promise = require(`bluebird`)
const path = require(`path`)
const get = require('lodash/get')
const { createFilePath, createRemoteFileNode } = require('gatsby-source-filesystem')

const { fmImagesToRelative } = require('gatsby-remark-relative-images')
// const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = ({ actions, graphql }) => {
  const { createPage, deletePage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {           
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const excludeArray = ['navbar', 'footer']
    // Filter out the footer, navbar, and meetups so we don't create pages for those
    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge, i) => {
      // if (edge.node.frontmatter.templateKey === excludeArray[i]) {
      //   return false;        
      // } 
      // // else {
      // //   // return !Boolean(edge.node.fields.slug.match(/^\/meetups\/.*$/));
      // //   console.log('No')
      // // }
    });

    postOrPage.forEach(edge => {
      let component, pathName, tags;

      if (edge.node.frontmatter.templateKey === "home-page") {
        pathName = "/";
        component = path.resolve(`src/pages/index.js`);

      } else {
        pathName = edge.node.frontmatter.path || edge.node.fields.slug;
        component = path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`);

        if (edge.node.frontmatter.templateKey === `blog`) {
          tags = edge.node.frontmatter.tags
        }
      }
      const id = edge.node.id;
      createPage({
        path: pathName,
        component,
        tags: tags,
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    postOrPage.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

  }).then(() => { 
    const productPageTemplate = path.resolve('src/templates/ProductPage.js')
    return graphql(
      `
            {
              allMoltinProduct {
                edges {
                  node {
                    originalId
                  }
                }
              }
            }
          `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allMoltinProduct.edges.forEach(edge => {
        createPage({
          path: `/product/${edge.node.originalId}/`,
          component: productPageTemplate,
          context: {
            originalId: edge.node.originalId,
          },
        })
      })
    })      
  })
}

exports.onCreateNode = async ({ node, actions, getNode, cache, store, createNodeId }) => {
  const { createNodeField, createNode } = actions
  const { frontmatter } = node
  
  let fileNode

  fmImagesToRelative(node) // convert image paths for gatsby images
  console.log(fmImagesToRelative(node))

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  if (node.internal && node.internal.type === `MoltinProduct`) {    

    const mainImageHref = get(node, 'includedData.main_image.link.href')    

    fileNode = await createRemoteFileNode({
      url: mainImageHref,
      store,
      cache,
      createNode,
      createNodeId
    })

    if (fileNode && fileNode.id) node.mainImage___NODE = fileNode.id
  }
}

exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
}) => {
  actions.setWebpackConfig({

      node: { fs: 'empty' },

  });
}