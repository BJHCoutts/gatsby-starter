import * as React from "react"

import { inject, observer } from "mobx-react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Astronaut } from "../components/images/astronaut"

import { ButtonConfirm } from "../components/button-confirm"
import { ButtonCancel } from "../components/button-cancel"

import { Card } from "../components/card"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

interface Props {
  store?: any
  data: any
}

@inject("store")
@observer
export default class IndexPage extends React.Component<Props> {
  render() {
    const { store } = this.props!

    const CardContainer = styled.div`
      margin-bottom: 3rem;
    `
    const TextBlock = styled.div`
      padding: 1rem 1.5rem 1.75rem 1.5rem;
      background-color: white;
    `
    const Title = styled.h1`
      color: darkslategrey;
      margin-bottom: 2rem;
    `
    return (
      <Layout>
        <SEO title="Home" />
        <ButtonConfirm label="OK" />
        <ButtonCancel label="cancel" />
        <div>{store.example.testMessage}</div>
        <div>{store.ui.example.testMessage}</div>
        <Title>Template Start</Title>
        <CardContainer>
          <Card width={"12rem"}>
            <Astronaut />
            <TextBlock>
              <hr
                style={{ margin: "0 1rem 1rem 1rem" } as React.CSSProperties}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias culpa ratione quas perspiciatis magni, dolores
                dolorum, magnam autem consectetur ullam iusto officia?
              </p>
              <p>
                Illo rem, doloremque perferendis voluptates enim totam vel?
                Odit, assumenda laudantium repellat cumque aliquam a laborum
                quam suscipit ipsa, et asperiores similique mollitia, corporis
                tempora! Vero, quam soluta.
              </p>
            </TextBlock>
          </Card>
        </CardContainer>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}
