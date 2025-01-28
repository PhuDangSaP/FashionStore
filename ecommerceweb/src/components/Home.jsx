import React, { useState } from "react";
import styled from "styled-components";
import { Card, Row, Col } from "react-bootstrap";
import SampleImage from "../assets/Sample.jpg";
import { Link } from "react-router-dom";
export default function Home() {
	const [Items] = useState([
		{ title: "Item 1", imgSrc: SampleImage },
		{ title: "Item 2", imgSrc: SampleImage },
		{ title: "Item 3", imgSrc: SampleImage },
		{ title: "Item 4", imgSrc: SampleImage },
		{ title: "Item 5", imgSrc: SampleImage },
		{ title: "Item 6", imgSrc: SampleImage },
		{ title: "Item 7", imgSrc: SampleImage },
		{ title: "Item 8", imgSrc: SampleImage },
	]);
	return (
		<Container>
			{Items.slice(0, 12).map((item, index) => (
				<div key={index}>
					<StyledLink to={`/product/${item.title}`}>
						<Card.Img variant="top" src={item.imgSrc} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
						</Card.Body>
					</StyledLink>
				</div>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 200px;
	gap: 20p;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;