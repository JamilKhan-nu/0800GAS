import { Link } from "gatsby"
import React from "react"
import * as headerStyle from "../styles/header.module.scss"
import logo from '../assets/logo.png'
function Header() {
  
  return (
    <div className={headerStyle.header}>
        <div className={headerStyle.topHeader}>
            <div className={headerStyle.logosection}>
            <Link to="/" >
                <img className={headerStyle.logo} src={logo} alt="logo"/>
            </Link>
            <div className={headerStyle.logoname}>
            <h1>0800GAS</h1>
            <p>Gas | Heating | Plumbing </p>
            </div>
            </div>
            <div className={headerStyle.contactus}>
                <div className={headerStyle.openingtime}>
                <p>Open Monday - Sunday 09:00 - 22:00 <br/>
                Call for a free Quote</p>
                </div>
                <Link>
                <h2 className={headerStyle.call}>07903960889</h2>
                </Link>
            </div>
        </div>
      <div>
        <ul className={headerStyle.navList}>
          <li>
            <Link to="/about" className={headerStyle.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className={headerStyle.navItem}>
            Boiler Service & Repair
            </Link>
          </li>
          <li>
            <Link to="/book" className={headerStyle.navItem}>
            Gas Service & Repair
            </Link>
          </li>
          <li>
            <Link to="/projects" className={headerStyle.navItem}>
            Cooker & Hob Installation
            </Link>
            </li>
            <li>
            <Link to="/" className={headerStyle.navItem}>
              About Us
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Header
