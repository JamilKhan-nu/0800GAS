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
      <h5>
      North-East 24 Hours Emergency Call out- 07903960889, Email: info@0800gas.co.uk, Facebook, Instagram
      </h5>
      <p>
      Designed & Developed by {data.site.siteMetadata.author}, Copyright ©
        2023
      </p>
      
    </div>
  )
}

export default Footer
