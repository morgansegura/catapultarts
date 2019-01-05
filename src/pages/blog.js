import React, { Component } from "react"
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import Hero from '../components/Hero'
// import config from '../data/siteConfig'

class IndexPage extends Component {

    state = {
        // state
    }

    componentDidMount() {
        // component did mount
    }

    render() {

        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        console.log(data)

        return (
            <Layout>
                <section className="section section__index">
                    <div id="hero" className="hero container">
                        <div>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
                        </div>
                        {posts
                            .map(({ node: post }) => (
                                <div
                                    className="content"
                                    style={{ border: '1px solid #333', padding: '2em 4em' }}
                                    key={post.id}
                                >
                                    <p>
                                        <Link className="has-text-primary" to={post.fields.slug}>
                                            {post.frontmatter.title}
                                        </Link>
                                        <span> &bull; </span>
                                        <small>{post.frontmatter.date}</small>
                                    </p>
                                    <p>
                                        {post.excerpt}
                                        <br />
                                        <br />
                                        <Link className="button is-small" to={post.fields.slug}>
                                            Keep Reading →
                    </Link>
                                    </p>
                                </div>
                            ))}
                    </div>
                </section>
            </Layout>
        )
    }
}

export default IndexPage

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }    
  }
`