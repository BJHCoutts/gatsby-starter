import * as React from "react"
import styled from "styled-components"

interface Props {
  menuItems: string[]
}
export const HeaderMenu = (props: Props) => {
  return (
    <Container>
      {props.menuItems.map((menuItem: string) => {
        return <Title key="menuItem">{menuItem}</Title>
      })}
    </Container>
  )
}

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: lightgrey;
  display: inline;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover {
    color: white;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`
