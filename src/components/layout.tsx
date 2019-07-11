/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Footer } from "./footer"
import { Header } from "./header/header"

type Layout = {
  children: JSX.Element[]
}

export const Layout = ({ children }: Layout) => {
  const Main = styled.div`
    margin: 0 auto;
    maxwidth: 960;
    padding: 3rem 2.5rem 3.5rem 2.5rem;
    background-color: lightgrey;
  `

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
