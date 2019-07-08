import * as React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterTag>
      © {new Date().getFullYear()}, Built with
      <br />
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterTag>
  )
}

const FooterTag = styled.footer`
  background-color: grey;
  color: white;
  margin: 0 auto;
  maxwidth: 960px;
  padding: 1.45rem 1.0875rem;
`
