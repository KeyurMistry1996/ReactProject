import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import { graphql } from "gatsby"
import DualInfo from "../components/Reusable/DualInfo"
import Service from "../components/Reusable/Services"

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <SEO title="Home"></SEO>
      <HeroSection
        img={data.img.childImageSharp.fluid}
        title="Our services"
        subtitle=""
        heroclass="hero-background"
      ></HeroSection>
      <InfoBlock heading="Get Services"></InfoBlock>
      <DualInfo
        heading="Our Experties"
        src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?cs=srgb&dl=apple-laptop-notebook-office-39284.jpg&fm=jpg"
      ></DualInfo>
      <Service></Service>
    </Layout>
  </div>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "services.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
