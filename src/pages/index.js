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
        <div className="container">
          <h1 className="h1 t-center b9">
            H1 .h1.b9
          </h1>
          <p>{`class="<h1 class="h1 b9 t-center">H1</h1>"`}</p>
          <h2 className="h2 t-center b7">
            H2 .h2.b7
          </h2>
          <h3 className="h3 t-center b6">
            H3 .h3.b6
          </h3>
          <h4 className="h4 t-center b5">
            H4 .b4.b5
          </h4>
          <h5 className="h5 t-center b4">
            H5
          </h5>
          <h6 className="h5 t-center b3">
            H6
          </h6>
        </div>
      </Layout>
    )
  }
}

export default IndexPage