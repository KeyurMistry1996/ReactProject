import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import { graphql } from "gatsby"
import DualInfo from "../components/Reusable/DualInfo"
import Coursecart from "../components/Reusable/Cart/Coursecart"

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <SEO title="Home"></SEO>
      <HeroSection
        img={data.img.childImageSharp.fluid}
        title="I write Code"
        subtitle="LearnCodeOnline.in"
        heroclass="hero-background"
      ></HeroSection>
      <InfoBlock heading="About Us"></InfoBlock>
      <Coursecart courses={data.cources} />
      <DualInfo
        heading="Message From CEO"
        src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></DualInfo>
    </Layout>
  </div>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    cources: allContentfulCources {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          category
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
