import React, { Component } from "react"
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import BlogLayout from '../components/Layout'
import { limitByWord } from '../utils/helpers'

// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import Hero from '../components/Hero'
// import config from '../data/siteConfig'

class BlogPage extends Component {

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
            <BlogLayout>
                <section className="section section__hero bg vh--half bg--peach-gold-rtl-45">
                    <div id="hero" className="hero container buffer--y-lg">
                        <div>
                            Reminder, this is the Blog Main page
                        </div>
                    </div>
                </section>

                <section className="section section__blog pt-0 mt-minus-150">
                    <div className="container">
                        <div className="post__card-block row no-gutters">
                        {posts
                            .map(({ node: post }, i) => {
                                
                                let position = undefined

                                if (i === 0) {
                                    position = `one col-12`
                                } 
                                if (
                                    i === 1 || i === 2 || i === 3
                                ) {
                                    position = `three col-12 col-md-4`
                                }
                                if ( i === 4 || i == 5 ) {
                                    position = `two col-12 col-md-6`
                                }
                                
                                return (
                                    <div key={i} className={`${position}`}>
                                        <article className="post__card-item row no-gutters">
                                            <Link className={`post__card-image__link col-12 ${i === 0 ? 'col-md-8' : null}`} to={post.fields.slug}>
                                                <div className="post__card-image">
                                                    Image here
                                            </div>
                                            </Link>
                                            <div className={`post__card-content col-12 ${i === 0 ? 'col-md-4' : null}`}>
                                                <Link className="post__card-content__link" to={post.fields.slug}>
                                                    <header className="post__card-header">
                                                        <span className="post__card-category">
                                                            Tests
                                                    </span>
                                                        <h2 className="post__card-title">
                                                            {post.frontmatter.title}
                                                        </h2>
                                                    </header>
                                                    <section className="post__card-excerpt">
                                                        <p>
                                                            {limitByWord(post.excerpt, 20)} ...
                                                        </p>
                                                    </section>
                                                </Link>
                                                <footer className="post__card-meta">
                                                    <ul>
                                                        <li>
                                                            <div className="post__card-author__tooltip">
                                                                Catapult Blog
                                                        </div>
                                                            <Link className="post__card-content__link" to={post.fields.slug}>
                                                                Icon image
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                    <span className="post__card-category">4 min read</span>
                                                </footer>
                                            </div>
                                        </article>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </BlogLayout>
        )
    }
}

export default BlogPage

BlogPage.propTypes = {
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
            tags
          }
        }
      }
    }    
  }
`