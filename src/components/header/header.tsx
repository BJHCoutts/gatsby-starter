import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {HeaderMenu} from "./header-menu"
import { isNullOrUndefined } from "util";

type Header = {
  siteTitle: string
}

const Header = ({ siteTitle }: Header) => (
  <header
    style={{
      background: `grey`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display:'inline' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <HeaderMenu menuItems={["item1", "item2", "item3"]as string[]}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Template Header`,
}

export default Header
