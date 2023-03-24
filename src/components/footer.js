import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "../styles/footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={footerStyles.footer}>
      <p>
      North-East 24 Hours Emergency Call out- 07903960889, Email: info@0800gas.co.uk, Facebook, Instagram
      </p>
      <h5>
      Designed & Developed by {data.site.siteMetadata.author}, Copyright ©
        2023
      </h5>
      
    </div>
  )
}

export default Footer
