import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { HeaderMenu } from "./header-menu"

type Header = {
  siteTitle: string
}

export const Header = ({ siteTitle }: Header) => (
  <HeaderTag>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display: "inline" }}>
        <Link
          to="/"
          style={{
            color: `white`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <HeaderMenu menuItems={["item1", "item2", "item3"] as string[]} />
    </div>
  </HeaderTag>
)

const HeaderTag = styled.header`
  background: grey;
  marginbottom: 1.45rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Template Header`,
}
