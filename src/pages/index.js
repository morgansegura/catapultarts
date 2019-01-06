import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import Layout from '../layouts/Layout'

class IndexPage extends Component {

  state = {
    // state
  }

  componentDidMount() {
    // component did mount
  }

  render() {
    
    const { data } = this.props
    console.log(data)

    return (
      <Layout>
        <section className="buffer--y-lg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <small className="b6 uppercase color--cta">Create something</small>
                <h1 className="h1">Best design practices in one book</h1>
                <p className="mb-30">
                  A free resource that will help you understandthe design process and improve the quality of your work
                </p>
              </div>
              <div className="col-12 col-md-6">
              
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage