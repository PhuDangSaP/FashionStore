import React from "react";
import Header from "./Header";
import Home from "./Home";
import styled from "styled-components";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";
export default function () {
	return (
		<Container>
			<Header />
			<div className="body__content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:title" element={<Product />} />
				</Routes>
			</div>
		</Container>
	);
}
const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-rows: 10vh 90vh;
	.body__content {
		overflow-y: auto;
		&::-webkit-scrollbar {
			width: 0.7rem;
			max-height: 2rem;
			&-thumb {
				background-color: rgba(255, 255, 255, 0.6);
			}
		}
	}
`;
