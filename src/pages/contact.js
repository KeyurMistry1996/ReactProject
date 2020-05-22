import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import { graphql } from "gatsby"
import Contact from "../components/Reusable/Contact/contact"

const ContactPage = ({ data }) => (
  <div>
    <Layout>
      <SEO title="Contact"></SEO>
      <HeroSection
        img={data.img.childImageSharp.fluid}
        title="Contact Us"
        subtitle=""
        heroclass="about-background"
      ></HeroSection>
      <InfoBlock heading="How can we help?"></InfoBlock>
      <Contact />
    </Layout>
  </div>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
