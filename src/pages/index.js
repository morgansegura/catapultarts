import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
// import CustomLink from "../components/CustomLink";


export const HomePageTemplate = ({ home }) => {

  return (
      <Layout>
        <section className="buffer--y-lg bg bg--peach-gold-rtl-45 bg--round-box vh--half d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <small className="b5 uppercase color--grey300">Create something</small>
                <h1 className="h1">Best design practices in one book</h1>
                <p className="mb-30">
                  A free resource that will help you understand the design process and improve the quality of your work
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>An Image will go here eventually!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section section__services py-60">
          <div className="container">
            <h2 className="h1">
              Services Section
              <span className="hr"></span>
            </h2>

            <p className="color--grey700 b3">General Overview:</p>
            <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-1-circle"></span> Should contain 3 to 4 content blocks, each with a visual representation </p>
            <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-2-circle"></span> Branding & marketing. </p>
            <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-3-circle"></span> Thouroughly, yet breifly describe the service provided.</p>
            <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-4-circle"></span> Visual representation should .</p>

            <p className="color--grey700 b3 d-inline-block">Base Services: </p>
            <p><span className="iconify" data-icon="mdi-numeric-1-circle-outline"></span> Custom Web Design</p>
            <p><span className="iconify" data-icon="mdi-numeric-2-circle-outline"></span> Cutting Edge/Future Proof Web Development</p>
            <p><span className="iconify" data-icon="mdi-numeric-3-circle-outline"></span> Out of the box Digital Marketing</p>
            <p><span className="iconify" data-icon="mdi-numeric-4-circle-outline"></span> Custom Admin</p>

            <p className="color--grey700 b3 d-inline-block">Additional Services: </p>
            <p>Branding</p>
            <p>Marketing</p>

            <p className="color--grey700 b3 d-inline-block">Design Benefits: </p>
            <p>Branding</p>
            <p>Marketing</p>

            <p className="color--grey700 b3 d-inline-block">Dev Stack Benefits: </p>
            <p>Custom domain.</p>
            <p>Future Proof development stack. <i className="b3">(PostCSS, Gulp, WebPack, ReactJS, GatsbyJS, GraphQL, Netlify, Material Elements)</i></p>

            <p>Lightning fast load time.</p>
            <p>Brilliant S.E.O strategy out of the box.</p>
            <p>Google Lighthouse tested.</p>
            <p>Google analytics/Tag Manager setup.</p>
            <p>Google Optimize Setup.</p>

            <p>Hundreds of resources to get your business off the ground.</p>
            <p>Custom Admin <i className="b3">(Upsell whitelabelling, extra logins, etc.)</i></p>
            <p>Custom Backend.</p>

            <h3></h3>
          </div>
        </section>
      </Layout>
  );
};

class HomePage extends Component {
  render() {
    const { data } = this.props;
 
    return (
      <Layout >
      {/*}
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        */}
        <HomePageTemplate home={data} />
        
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    # ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            headerImage {
              image
              imageAlt
            }
            upcomingMeetupHeading
            noUpcomingMeetupText
            mapsNote
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;