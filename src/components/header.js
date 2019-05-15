import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle, siteDescription }) => (
  <div
    style={{
      minWidth: `20%`,
      maxWidth: `25%`,
      borderRight: `2px dotted hsla(0.9, 50%, 50%, 0.3)`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`
      }}
    >
      <Image style={{width: 170}}/>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `hsla(305, 100%, 80%, .5)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        margin: `1.5rem 2rem`,
        border: `1px solid black`,
      }}
    >
      description: {siteDescription}
    </div>
    <div
      style={{
        margin: `1.5rem 2rem`,
        border: `1px solid black`,
      }}
    >
      special topics
    </div>

     <footer style={{marginTop: `auto`}}>
      <a style={{textDecoration: `none`, fontSize: `0.8em`}}
         href="https://polygon.pizza">polygon ♥ pizza
      </a>
    </footer>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: `...`,
}


export default Header
