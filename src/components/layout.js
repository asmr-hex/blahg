/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {reduce} from 'lodash'

import Header from "./header"
import SEO from "./seo"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div className="content">
        <SEO title="p_p" keywords={[`music`, `programming`, `nonsense`]} />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
           topics={reduce(data.allMarkdownRemark.group, (acc, v) => ({...acc, [v.fieldValue]: v.totalCount}), {})}
        />
        <div
          style={{
            padding: `1rem 1rem`,
            width: `100%`,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
