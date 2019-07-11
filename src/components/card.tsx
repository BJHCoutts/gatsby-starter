import * as React from "react"

import styled from "styled-components"

type Props = {
  children: React.ReactNode
  width: string
}

export const Card = (props: Props) => {
  const Container = styled.div`
    border: solid 2px lightgrey;
    border-radius: 6px;
    box-shadow: var(--shadow);
    width: ${props.width};
    overflow: hidden;
  `
  return <Container>{props.children}</Container>
}
