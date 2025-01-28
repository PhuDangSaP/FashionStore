import React from "react";
import styled from "styled-components";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
export default function Header() {
	return (
		<Container>
			<div className="Menu">
				<IoMenu />
			</div>
			<div className="Search">
				<FaSearch />
				Tìm kiếm
			</div>
			<div className="Logo">Logo</div>

			<div className="Login">
				<FaUser />
			</div>
			<div className="Cart">
				<FaShoppingCart />
			</div>
		</Container>
	);
}

const Container = styled.div`
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	justify-items: center;
	display: grid;
	grid-template-columns: 1fr 1fr 10fr 1fr 1fr;
	background-color: #f8f9fa;
    font-size:20px;
	.Logo {
		font-size: 40px;
        font-weight: bold;
	}
`;
