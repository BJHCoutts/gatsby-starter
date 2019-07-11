import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { HeaderMenu } from "./header-menu"

import genericLogoWhite from "../../images/generic-logo-white.svg"

interface Props {
  siteTitle: string
}

export const Header = ({ siteTitle }: Props) => {
  const HeaderContainer = styled.header`
    background: grey;
    display: flex;
    flex-flow: row nowrap;
  `

  const HeaderContent = styled.div`
    height: 7.25rem;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `

  const TextContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 100%;
  `

  const Title = styled.h1`
    display: inline;
    color: white;
    vertical-align: text-top;
  `

  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={genericLogoWhite}
          style={{
            height: "100%",
            width: "auto",
            marginRight: "3rem",
            float: "left",
          }}
        />
        <TextContainer>
          <Title>
            <Link to="/">{siteTitle}</Link>
          </Title>
          <HeaderMenu menuItems={["item1", "item2", "item3"] as string[]} />
        </TextContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
