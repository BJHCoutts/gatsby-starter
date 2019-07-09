import React from "react"

import { inject, observer } from "mobx-react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  store?: any
}

@inject("store")
@observer
export default class IndexPage extends React.Component<Props> {
  render() {
    const { store } = this.props!
    return (
      <Layout>
        <SEO title="Home" />
        <div>{store.example.testMessage}</div>
        <div>{store.ui.example.testMessage}</div>
        <Title>Template Start</Title>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

const Title = styled.h1`
  color: red;
`
