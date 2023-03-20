import * as React from "react"
import Layout from "../components/layout"

import herosection from '../assets/plumbers.svg'
import * as indexStyle from '../styles/index.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulService(sort: {createdAt: ASC}) {
      edges {
        node {
          serviceHeading
          serviceDescription {
            serviceDescription
          }
          serviceImage {
            gatsbyImage(width: 999, height: 999, fit: CONTAIN)
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <div className={indexStyle.container}>
        <div className={indexStyle.herosection}> 
          <h4>Say Goodbye to your Boiler Repair Bill</h4>
          <h1>0800GAS </h1>
          <h5>Your Domastic and commercial Gas Expert is at your Service</h5>
          <p>Boiler installations, boiler servicing, boiler repairs; gas safety certificates for domestic and commercial customers in Newcastle upon Tyne, North Tyneside, Gateshead, South Tyneside, Northumberland, Wearside and Durham</p>
          
        </div>
        <div >
          <img className={indexStyle.heroImage} src={herosection} alt='herosection'/>
        </div>
      </div>
      <div className={indexStyle.serviceSection}>
            <h2>Our Range of services</h2>
          
          <div>
            <div className={indexStyle.services}>
                {data.allContentfulService.edges.map((edge) =>{
                  return (
                  <div className={indexStyle.service}>
                    <GatsbyImage image={edge.node.serviceImage.gatsbyImage}/>
                    <h1 className={indexStyle.serviceHeading}>{edge.node.serviceHeading}</h1>
                    <p className={indexStyle.serviceDescription}>{edge.node.serviceDescription.serviceDescription}</p>
                  </div>
                  )
                })}
              </div>

            </div>
          
        </div>


      
    </Layout>
  )
}

