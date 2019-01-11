// // import React, { Component } from "react"
// // import PropTypes from 'prop-types'
// // import { Link, graphql } from "gatsby"
// // import Layout from '../layouts/Layout'

// // class IndexPage extends Component {

// //   state = {
// //     // state
// //   }

// //   componentDidMount() {
// //     // component did mount
// //   }

// //   render() {

// //     const { data } = this.props
// //     console.log(data)

// //     return (
//       <Layout>
//         <section className="buffer--y-lg bg bg--peach-gold-rtl-45 bg--round-box vh--half d-flex align-items-center">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-12 col-md-6">
//                 <small className="b5 uppercase color--grey300">Create something</small>
//                 <h1 className="h1">Best design practices in one book</h1>
//                 <p className="mb-30">
//                   A free resource that will help you understand the design process and improve the quality of your work
//                 </p>
//               </div>
//               <div className="col-12 col-md-6">
//                 <p>An Image will go here eventually!</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="services" className="section section__services py-60">
//           <div className="container">
//             <h2 className="h1">
//               Services Section
//               <span className="hr"></span>
//             </h2>

//             <p className="color--grey700 b3">General Overview:</p>
//             <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-1-circle"></span> Should contain 3 to 4 content blocks, each with a visual representation </p>
//             <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-2-circle"></span> Branding & marketing. </p>
//             <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-3-circle"></span> Thouroughly, yet breifly describe the service provided.</p>
//             <p className="fs-18"><span className="iconify" data-icon="mdi-numeric-4-circle"></span> Visual representation should .</p>

//             <p className="color--grey700 b3 d-inline-block">Base Services: </p>
//             <p><span className="iconify" data-icon="mdi-numeric-1-circle-outline"></span> Custom Web Design</p>
//             <p><span className="iconify" data-icon="mdi-numeric-2-circle-outline"></span> Cutting Edge/Future Proof Web Development</p>
//             <p><span className="iconify" data-icon="mdi-numeric-3-circle-outline"></span> Out of the box Digital Marketing</p>
//             <p><span className="iconify" data-icon="mdi-numeric-4-circle-outline"></span> Custom Admin</p>

//             <p className="color--grey700 b3 d-inline-block">Additional Services: </p>
//             <p>Branding</p>
//             <p>Marketing</p>            

//             <p className="color--grey700 b3 d-inline-block">Design Benefits: </p>
//             <p>Branding</p>
//             <p>Marketing</p>      

//             <p className="color--grey700 b3 d-inline-block">Dev Stack Benefits: </p>
//             <p>Custom domain.</p>
//             <p>Future Proof development stack. <i className="b3">(PostCSS, Gulp, WebPack, ReactJS, GatsbyJS, GraphQL, Netlify, Material Elements)</i></p>

//             <p>Lightning fast load time.</p>
//             <p>Brilliant S.E.O strategy out of the box.</p>
//             <p>Google Lighthouse tested.</p>
//             <p>Google analytics/Tag Manager setup.</p>
//             <p>Google Optimize Setup.</p>

//             <p>Hundreds of resources to get your business off the ground.</p>
//             <p>Custom Admin <i className="b3">(Upsell whitelabelling, extra logins, etc.)</i></p>
//             <p>Custom Backend.</p>

//             <h3></h3>
//           </div>
//         </section>

//       </Layout>
// //     )
// //   }
// // }

// // export default IndexPage


// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Helmet from "react-helmet";
// // import isAfter from "date-fns/is_after";
// import Layout from "../components/Layout";
// // import Map from "../components/Map";
// import HeadshotPlaceholder from "../assets/images/logo.svg";
// import CustomLink from "../components/CustomLink";


// export const HomePageTemplate = ({ home, upcomingMeetup = null }) => {
//     const presenters = upcomingMeetup && upcomingMeetup.presenters;
//     const latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLatitude);
//     const longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.mapsLongitude);
//     return (
//         <>
//             <section className="header">
//                 <div className="header-container  container">
//                     {home.headerImage && <img className="header-image" src={home.headerImage.image} alt={home.headerImage.imageAlt} />}
//                     <h3 className="header-tagline">
//                         <span className="header-taglinePart">{home.title}</span>
//                     </h3>
//                 </div>
//             </section>
//             <section className="upcomingMeetup  section">
//                 <div className="upcomingMeetup-container  container">
//                     <h2 className="upcomingMeetup-title">{home.upcomingMeetupHeading}</h2>
//                     {upcomingMeetup ? (
//                         <>
//                             <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
//                                 <span className="upcomingMeetup-detailLabel">Date: </span>
//                                 {upcomingMeetup.formattedDate}
//                             </p>
//                             <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
//                                 <span className="upcomingMeetup-detailLabel">Location: </span>
//                                 {upcomingMeetup.location.name}
//                             </p>
//                             {presenters.length > 0 && (
//                                 <div className="upcomingMeetup-presenters">
//                                     {presenters.map(presenter => (
//                                         <div className="upcomingMeetup-presenter" key={presenter.text}>
//                                             <img
//                                                 className="upcomingMeetup-presenterImage"
//                                                 src={presenter.image ? presenter.image : HeadshotPlaceholder}
//                                                 alt={presenter.image ? presenter.name : "Default headshot placeholder"}
//                                             />
//                                             <span className="upcomingMeetup-presenterName">{presenter.name}</span>
//                                             <span className="upcomingMeetup-presenterPresentationTitle">
//                                                 {presenter.presentationTitle}
//                                             </span>
//                                             <p className="upcomingMeetup-presenterDescription">{presenter.text}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             <p className="upcomingMeetup-mapNote">{home.mapsNote}</p>
//                             <div className="upcomingMeetup-mapWrapper">
//                                 <Map
//                                     isMarkerShown
//                                     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
//                                     loadingElement={<div style={{ height: `100%` }} />}
//                                     containerElement={<div style={{ height: `100%` }} />}
//                                     mapElement={<div style={{ height: `100%` }} />}
//                                     link={upcomingMeetup.location.mapsLink}
//                                     latitude={latitude}
//                                     longitude={longitude}
//                                 />
//                             </div>
//                         </>
//                     ) : (
//                             <p className="upcomingMeetup-detail">{home.noUpcomingMeetupText}</p>
//                         )}
//                 </div>
//             </section>
//             <section className="ctaBlock">
//                 <CustomLink
//                     linkType={home.callToActions.firstCTA.linkType}
//                     linkURL={home.callToActions.firstCTA.linkURL}
//                     className="ctaBlock-pattern  ctaBlock-pattern--first"
//                 >
//                     <div className="ctaBlock-cta">
//                         <span className="ctaBlock-ctaHeading">{home.callToActions.firstCTA.heading}</span>
//                         <p className="ctaBlock-ctaDescription">{home.callToActions.firstCTA.subHeading}</p>
//                     </div>
//                 </CustomLink>
//                 <CustomLink
//                     linkType={home.callToActions.secondCTA.linkType}
//                     linkURL={home.callToActions.secondCTA.linkURL}
//                     className="ctaBlock-pattern  ctaBlock-pattern--second"
//                 >
//                     <div className="ctaBlock-cta">
//                         <span className="ctaBlock-ctaHeading">{home.callToActions.secondCTA.heading}</span>
//                         <p className="ctaBlock-ctaDescription">{home.callToActions.secondCTA.subHeading}</p>
//                     </div>
//                 </CustomLink>
//             </section>
//         </>
//     );
// };

// class HomePage extends React.Component {
//     render() {
//         const { data } = this.props;
//         const {
//             data: { footerData, navbarData },
//         } = this.props;
//         const { frontmatter: home } = data.homePageData.edges[0].node;
//         const {
//             seo: { title: seoTitle, description: seoDescription, browserTitle },
//         } = home;
//         let upcomingMeetup = null;
//         // Find the next meetup that is closest to today
//         data.allMarkdownRemark.edges.every(item => {
//             const { frontmatter: meetup } = item.node;
//             if (isAfter(meetup.rawDate, new Date())) {
//                 upcomingMeetup = meetup;
//                 return true;
//             } else {
//                 return false;
//             }
//         });
//         return (
//             <Layout footerData={footerData} navbarData={navbarData}>
//                 <Helmet>
//                     <meta name="title" content={seoTitle} />
//                     <meta name="description" content={seoDescription} />
//                     <title>{browserTitle}</title>
//                 </Helmet>
//                 <HomePageTemplate home={home} upcomingMeetup={upcomingMeetup} />
//             </Layout>
//         );
//     }
// }

// HomePage.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.array,
//         }),
//     }),
// };

// export default HomePage;

// export const pageQuery = graphql`
//   query HomePageQuery {
//     # allMarkdownRemark(
//     #   filter: { frontmatter: { presenters: { elemMatch: { text: { ne: null } } } } }
//     #   sort: { order: DESC, fields: frontmatter___date }
//     # ) {
//     #   edges {
//     #     node {
//     #       frontmatter {
//     #         title
//     #         formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
//     #         rawDate: date
//     #         presenters {
//     #           name
//     #           image
//     #           text
//     #           presentationTitle
//     #         }
//     #         location {
//     #           mapsLatitude
//     #           mapsLongitude
//     #           mapsLink
//     #           name
//     #         }
//     #       }
//     #     }
//     #   }
//     # }
//     ...LayoutFragment
//     homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             headerImage {
//               image
//               imageAlt
//             }
//             upcomingMeetupHeading
//             noUpcomingMeetupText
//             mapsNote
//             callToActions {
//               firstCTA {
//                 heading
//                 subHeading
//                 linkType
//                 linkURL
//               }
//               secondCTA {
//                 heading
//                 subHeading
//                 linkType
//                 linkURL
//               }
//             }
//             seo {
//               browserTitle
//               title
//               description
//             }
//           }
//         }
//       }
//     }
//   }
// `;