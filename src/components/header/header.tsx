import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { HeaderMenu } from "./header-menu"

import genericLogo from "../../images/generic-logo.svg"

type Header = {
  siteTitle: string
}

export const Header = ({ siteTitle }: Header) => (
  <HeaderContainer>
    <HeaderContent>
      <Logo>
        <img src={genericLogo} style={{ height: "100%", width: "100%" }} />
      </Logo>
      <span>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        <HeaderMenu menuItems={["item1", "item2", "item3"] as string[]} />
      </span>
    </HeaderContent>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  background: grey;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Logo = styled.div`
  background: white;
  height: 50px;
  width: 50px;
`

const Title = styled.h1`
  margin: 0;
  display: inline;
  color: white;
`
