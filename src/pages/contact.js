import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me assist with your next academic project &rarr;</p>
        </div>
        <div>
          <form className="form-container" action="https://formspree.io/f/xkndbero" method="POST">
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="name" id="w3lName" style={{fontSize: '18px'}}/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="_replyto" id="w3lSender" style={{fontSize: '18px'}}/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="subject" id="w3lSubject" style={{fontSize: '18px'}}/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="message" id="w3lMessage" style={{fontSize: '18px'}}></textarea>
            </div>
            <input type="hidden" name="_next" value="/thank-you" />
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" value="Send" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
