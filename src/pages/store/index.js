import React, { Component } from "react"
import get from 'lodash/get'
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import Layout from '../../components/Layout'
import ProductList from '../../components/ProductList'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import Hero from '../components/Hero'
// import config from '../data/siteConfig'

class StorePage extends Component {

    state = {
        // state
    }

    componentDidMount() {
        // component did mount
    }

    render() {

        const { data } = this.props
        const products = get(this, 'props.data.allMoltinProduct.edges')
        const filterProductsWithoutImages = products.filter(
            v => v.node.includedData.main_image
        )


        console.log(data)

        return (
            <Layout>
                <section className="section section__store">
                    <div id="hero" className="store">
                        <div>
                            <ProductList products={filterProductsWithoutImages} />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default StorePage

export const pageQuery = graphql`
  query StoreQuery {
    allMoltinProduct {
      edges {
        node {
          originalId
          name
          description
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          includedData {
            main_image {
              id
              link {
                href
              }
            }
          }
          mainImage {
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }    
  }
`