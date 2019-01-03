import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'

export default class BlogIndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/" />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogIndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
