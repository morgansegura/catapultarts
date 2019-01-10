import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import BlogLayout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PageCustomTemplate = ({
    content,
    contentComponent,
    description,
    title,
    helmet,
}) => {
    const PageContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                        <PageContent content={content} />
                    </div>
                </div>
            </div>
        </section>
    )
}

PageCustomTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const PageCustom = ({ data }) => {
    const { markdownRemark: page } = data

    return (
        <BlogLayout>
            <PageCustomTemplate
                content={page.html}
                contentComponent={HTMLContent}
                description={page.frontmatter.description}
                helmet={
                    <Helmet
                        titleTemplate="%s | Blog"
                    >
                        <title>{`${page.frontmatter.title}`}</title>
                        <meta name="description" content={`${page.frontmatter.description}`} />
                    </Helmet>
                }
                tags={page.frontmatter.tags}
                title={page.frontmatter.title}
            />
        </BlogLayout>
    )
}

PageCustom.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default PageCustom

export const pageQuery = graphql`
  query PageCustomByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`