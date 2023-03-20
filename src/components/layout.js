import React from "react"
import Footer from "./footer"
import Header from "./header"
import * as layoutStyles from "../styles/layout.module.scss"

function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      
        <Header />
        <main>{children}</main>
      
      <Footer />
    </div>
  )
}

export default Layout
