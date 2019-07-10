import React, { ReactChild, ReactChildren } from "react"

import styled from "styled-components"

type Props = {
  children: React.ReactNode
  width: string
}

export const Card = (props: Props) => {
  const Container = styled.div`
    border: solid 2px lightgrey;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.075);
    width: ${props.width};
    overflow: hidden;
  `
  return <Container>{props.children}</Container>
}
