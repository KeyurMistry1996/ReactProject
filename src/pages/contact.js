import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import { graphql } from "gatsby"
import DualInfo from "../components/Reusable/DualInfo"
import Teamsection from "../components/Reusable/About/Teamsection"

const AboutPage = ({ data }) => (
  <div>
    <Layout>
      <SEO title="Home"></SEO>
      <HeroSection
        img={data.img.childImageSharp.fluid}
        title="About LearnCodeOnline"
        subtitle=""
        heroclass="about-background"
      ></HeroSection>
      <DualInfo
        heading="Our Team"
        src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></DualInfo>
      <InfoBlock heading="Our Vision"></InfoBlock>
      <Teamsection></Teamsection>
    </Layout>
  </div>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
