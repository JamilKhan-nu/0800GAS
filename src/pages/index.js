import * as React from "react"
import Layout from "../components/layout"
import aboutpic from '../assets/aboutus.jpeg'
import whyus from '../assets/gasexpert.jpeg'
import calling from '../assets/calling.gif'
import fixed from '../assets/fixedprice.gif'
import workdone from '../assets/boilerdone.gif'
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
        <div className={indexStyle.aboutus}>
          <div className={indexStyle.aboutimg}>
          <img  src={aboutpic} alt="logo"/>  
          </div>
          <div className={indexStyle.aboutinfo}>
          <h5>About Us</h5>
          <h1>0800GAS</h1>
          <h3>The central heating and boiler experts for the North East</h3>
          <p>Welcome to our website. We’re one of the North East’s fastest-growing, most highly-rated, family-run gas specialists businesses in the region. Providing landlords and business owners with gas safety certificates.</p>
          <ul>
            <li>Experienced gas engineers</li>
            <li>Boiler installation</li>
            <li>Boiler repair</li>
            <li>LPG gas work</li>
            <li>Cooker fitting</li>
            <li>Commercial gas</li>
            <li>Gas safety certificates</li>
            <li>Gas Safe registered</li>
            <li>Professional and reliable</li>
          </ul>

          </div>
        </div>
        <div className={indexStyle.reviewsection}>
          <h2>What Our Customers Think</h2>
          <div className={indexStyle.reviewcard}>
            <div className={indexStyle.reviewcardTop}>
              <div className={indexStyle.reviewerphoto}>JK</div>
              <div className={indexStyle.reviewname}>
                <h5>Name name</h5>
                <p>a year ago</p>
              </div>
            </div>
            <div>five star* * * * *</div>
            <div className={indexStyle.startrating}>I used North East Gas about 6 months ago to fix my boiler that had an issue with a part that had reached its end of life. The engineer is highly professional, honest in ith a part that had reached its end of life. The engineer is highly professional, honest in his appraisal of </div>
          </div>
          </div>
          <div className={indexStyle.aboutus}>
          <div className={indexStyle.aboutimg}>
          <img  src={whyus} alt="logo"/>  
          </div>
          <div className={indexStyle.aboutinfo}>
          <h5>Why You Choose Us</h5>
          <h3>The best prices and best service from our engineers and plumbers</h3>
          <p>We’re the heating and plumbing team for domestic and commercial customers across the North East and we’re proud of the services and standards we deliver</p>
          
          <div className={indexStyle.whyus}>
            <div className={indexStyle.whoweare}>
              <h4>Who we are</h4>
              <p>We’re a family-run heating and plumbing company based in Newcastle upon Tyne. We’re Gas Safe registered and BPEC/City & Guilds accredited.</p>
            </div>
            <div className={indexStyle.whoweare}>
              <h4>Where we serve</h4>
              <p>We serve homeowners and businesses in Newcastle upon Tyne, North Tyneside, Gateshead, South Tyneside, Northumberland, Wearside and Durham</p>
            </div>
            <div className={indexStyle.whoweare}>
              <h4>What we do</h4>
              <p>We’re boiler specialists – installations, maintenance, and repairs. We also provide gas safety checks to the region’s landlords, business owners and caterers.</p>
            </div>
          </div>

          </div>
        </div>
        <div className={indexStyle.howweworksection}>
          <h1>How We Work</h1>
          <div className={indexStyle.howweworks}>
            <div className={indexStyle.howwework}>
            <img  src={calling} alt="logo"/> 
              <h3>Book an appointment</h3>
              <p>Let us know what you need and when we can come to see you - give us a call or send us an email and we look forward to meeting you.</p>
            </div>
            <div className={indexStyle.howwework}>
            <img  src={fixed} alt="logo"/> 
              <h3>Fixed price quote</h3>
              <p>No nasty surprises, no hidden costs. Following our visit, we'll leave you with a fixed quote for the work. We promise competitive prices.</p>
            </div>
            <div className={indexStyle.howwework}>
            <img  src={workdone} alt="logo"/> 
              <h3>We get to work for you</h3>
              <p>On a time and date convenient for you, we'll carry out the work you need us to do with as little disruption as possible.</p>
            </div>
          </div>
        </div>
      
    </Layout>
  )
}

