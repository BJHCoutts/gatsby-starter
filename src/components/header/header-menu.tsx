import * as React from 'react'
import styled from 'styled-components'

type props = {
menuItems: string[]
}
export const HeaderMenu = (props:props) => {
	return(
		<Container>
		{props.menuItems.map((menuItem:string) => {
			return(
			<Title key="menuItem">{menuItem}</Title>
			)
		})}
		</Container>
	)
}

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
	color: lightgrey;
	display:inline;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
`;