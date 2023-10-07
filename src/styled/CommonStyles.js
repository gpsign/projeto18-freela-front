import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Behind = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.6);
	z-index: 10;
`;

export const FormContainer = styled.div`
	width: 450px;
	height: fit-content;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	border-radius: 3px;

	padding: 15px 0px 15px 0px;

	filter: drop-shadow(0px 5px 5px gray);

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	font-family: "ProximaNovaMedium";

	overflow-y: scroll;

	h2 {
		font-size: 58px;
		margin-top: 34px;
		margin-bottom: 35px;
		color: black;
		text-align: center;
	}

	form {
		width: 100%;
		padding: 0px 25px 0px 25px;
		margin: 30px 0px 30px 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	input {
		width: 100%;
		height: 65px;

		border: none;
		border-radius: 8px;
		outline: none;

		background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

		padding-left: 42px;
		margin: 8px 0px 8px 0px;

		font-size: 22px;

		&::placeholder {
			font-size: 20px;
		}

		font-family: "ProximaNovaBold";
	}

	form > button {
		height: 60px;
		width: fit-content;

		background-image: linear-gradient(to right, #a6eca8, #a6ecb8);

		border-radius: 4px;
		border: none;

		font-size: 22px;
		font-family: "ProximaNovaBold";

		filter: drop-shadow(0px 2px 4px lightgray);

		margin-top: 20px;
		padding: 15px;

		transition: filter 0.5s, transform 0.1s ease-out;

		&:hover {
			filter: brightness(0.97) drop-shadow(0px 2px 4px lightgray);
			transition: filter 0.3s;

			cursor: pointer;
		}

		&:active {
			transform: translateY(1px);
			transition: transform 0.1s ease-out;
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px white inset !important;
	}
`;

export const StyledLink = styled(Link)`
	font-size: 18px;
	text-decoration: none;
	color: black;

	margin-top: 10px;
	margin-bottom: 10px;
	text-align: center;

	cursor: pointer;

	.underline {
		border-bottom: 1px solid black;
		filter: drop-shadow(1px 1px 6px gray);
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	position: relative;
`;

export const CentralizerContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: ${({ $align }) => ($align === "true" ? "center" : "")};

	overflow-y: hidden;
	overflow-x: hidden;

	background: rgb(237, 241, 247);
	background: linear-gradient(
		144deg,
		rgba(237, 241, 247, 1) 0%,
		rgba(219, 219, 219, 1) 100%
	);
`;
