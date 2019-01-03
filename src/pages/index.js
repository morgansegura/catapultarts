import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import Hero from '../components/Hero'
// import config from '../data/siteConfig'

class Pages extends Component {

  state = {
    // state
  }

  componentDidMount() {
    // component did mount
  }

  render() {
    
    const { data } = this.props
    const wp = data.wordpressPage

    console.log(data)

    return (
      <Layout>
        <section className="section section__index">
          {/*!!data.acf.hero_billboard_boolean 
            && data.acf.hero_billboard_boolean === true ?
            <Hero heroImage={data.acf.hero_billboard_boolean} node={data.acf.hero_billboard} />
          : null }
          
          {!!data.hero_boolean
            && data.acf.hero_boolean === true ?
            data.acf.hero.map(({image}, i ) => (
              <Hero key={i} heroCarousel={data.acf.hero_boolean} node={image} />
            ))
          : null 

          <article data-aos="zoom-out-left" className="container">
              <header className="py-40 conatiner container--md title__block">
                <h1 className="title">
                  Welcome to the {data.title} page of {config.siteTitle}                    
                </h1>
                <h2 className="subtitle">
                  {data.title}
                </h2>
              </header>
              <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </article>
          */}
          <div id="hero" className="hero container">
            <div>
            
            </div>
          </div>
        </section>
        
        {/* Mission Component */}
        <section id="mission" className="section mission">
          <div className="container content__block bg--light buffer--y-xl">
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="nav__anchors">
                  <Link to="/" className="nav__anchors__link cta">
                    <span>Learn More</span> <span className="icon mdi mdi-chevrom-right"></span>
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Mission
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Services
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Team
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Investors
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="anchor__view mb-25">
                  <span className="b3">01.</span>
                  <span className="anchor__gap"></span>
                  <span className="b6">Mission</span>
                </div>
                <div className="content__centered">
                  <h3 className="title mb-30">
                    Our mission is new technology meets veteran experience. We've gathered the best in finance with some of the most innovative.
                  </h3>
                  <p className="copy">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews.
                    Iterative approaches to corporate strategy foster collaborative thinking to further
                    the overall value proposition. Organically grow the holistic world view of disruptive
                    innovation via workplace diversity and empowerment.
                  </p>
                </div>            
              </div>
            </div>
          </div>
        </section>

        {/* Services Component */}
        <section id="services" className="services container">
          {/* Services Design */}
          <div className="row services__block services__design">
            <div className="col-12 col-md-6">
              <div className="services__image content__block content__abs-center bg--alt buffer--y-xl">

              </div>
            </div>       
            <div className="col-12 col-md-6 content__block content__abs-center bg--white buffer--full-lg">
              <div className="services__description">
                <h3 className="title mb-20">
                  Custom UI/UX Design & Branding.
                </h3>
                <p className="copy mb-20">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking to further
                  the overall value proposition.
                </p>
                <a href="">Learn More <span className="iconify" data-icon="mdi-arrow-right"></span></a>
              </div>
            </div>       
          </div>

          {/* Services Design */}      
          <div className="row services__block services__design">
            <div className="col-12 col-md-6 content__block content__abs-center bg--white buffer--full-lg">
              <div className="services__description">
                <h3 className="title mb-20">
                  Professional Web Development Creation & Mentoring.
                </h3>
                <p className="copy mb-20">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking to further
                  the overall value proposition.
                </p>
                <a href="">Learn More <span className="iconify" data-icon="mdi-arrow-right"></span></a>
              </div>
            </div>          
            <div className="col-12 col-md-6">
              <div className="services__image content__block content__abs-center bg--alt buffer--y-xl">
 
              </div>
            </div>
          </div>

          {/* Services Marketing */}      
          <div className="row services__block services__marketing">
            <div className="col-12 col-md-6">
              <div className="services__image">

              </div>
            </div>       
            <div className="col-12 col-md-6">
              <div className="services__description">
              
              </div>
            </div>       
          </div>       
        </section>

      </Layout>
    )
  }
}

export default Pages

// Set here the ID of the home page.
export const pageQuery = graphql`
  query  {
    wordpressPage(slug: { eq: "home"})  {
      acf {
        hero_boolean
        hero {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1270) {
                  ...GatsbyImageSharpFluid
                }
              }                
            }
          }

          alt
          title
          caption
        }
        hero_billboard_boolean
        hero_billboard {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1270) {
                  ...GatsbyImageSharpFluid
                }
              }                
           
            }
          }
          link {
            button {
              title
              text
              url
              target             
            }
            options
            corners
            color
            bg_color
            valign
            halign            
          }
          alt
          title
          caption
        }
        # Flexible Random
      }
      id
      title
      content
      excerpt
      slug        
    }
  }
`