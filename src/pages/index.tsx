import React from "react"

import { inject, observer } from "mobx-react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import * as s from "../styles/index.module.css"

interface Props {
  store?: any
}

@inject("store")
@observer
class IndexPage extends React.Component<Props> {
  render() {
    const { store } = this.props!
    return (
      <Layout>
        <SEO title="Home" />
        <div>{store.example.testMessage}</div>
        <div>{store.ui.example.testMessage}</div>
        <h1 className={s.title}>Template Start</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
