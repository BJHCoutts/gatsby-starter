import * as React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterTag>
      <Content>
        © {new Date().getFullYear()}, Built with
        <br />
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Content>
    </FooterTag>
  )
}

const FooterTag = styled.footer`
  background-color: grey;
`

const Content = styled.div`
  color: white;
  padding: 1.45rem 1.0875rem;
  margin: 0 auto;
  max-width: 960px;
`
