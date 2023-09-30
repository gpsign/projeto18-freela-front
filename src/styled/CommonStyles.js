import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ElementsContainer = styled.div`
	width: 450px;
	height: 500px;

	margin-top: -200px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	border-radius: 3px;

	filter: drop-shadow(0px 5px 5px gray);

	background-color: #ffffff;

	font-family: "ProximaNovaMedium";

	overflow-y: scroll;

	h2 {
		font-size: 48px;
		margin-top: 34px;
		margin-bottom: 35px;
		color: black;
		text-align: center;
	}

	input {
		height: 60px;
		width: 410px;

		border: none;
		border-radius: 8px;
		outline: none;

		background-image: linear-gradient(to bottom right, #e7eaed, #e0e1e2);

		margin: 25px 0px 5px 20px;
		padding-left: 18px;

		font-size: 22px;

		&::placeholder {
			font-size: 22px;
		}

		font-family: "ProximaNovaBold";
	}

	textarea {
		width: 400px;
		height: 140px;

		border: none;
		border-radius: 12px;
		outline: none;

		margin: 0px 25px 25px 20px;
		padding-left: 8px;

		font-size: 28px;
		letter-spacing: 2px;

		resize: none;

		&::placeholder {
			font-family: "ShiftyNotes";
			font-size: 28px;
		}
	}

	button {
		width: 180px;
		height: 50px;

		background-image: linear-gradient(to right, #8deeae, #9effaf);

		border-radius: 28px;
		border: none;

		font-size: 28px;
		font-family: "ProximaNovaBold";

		margin-left: 130px;
		margin-top: 35px;
		margin-bottom: 50px;
		

		transition: filter 0.5s, transform 0.1s ease-out;

		&:hover {
			filter: brightness(0.94);
			transition: filter 0.3s;

			cursor: pointer;
		}

		&:active {
			transform: translateY(1px);
			transition: transform 0.1s ease-out;
		}
	}

	.Close {
		width: 50px;
		height: 50px;

		border-radius: 100%;
		background-color: #e75353;

		outline: none;
		border: none;

		cursor: pointer;

		transition: all 0.5s ease-out;

		margin-left: 20px;

		filter: brightness(1.1);

		p {
			font-family: "motley";
			font-size: 32px;
			margin-left: 2px;
		}

		&:not(:hover) {
			filter: brightness(1);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px white inset !important;
	}

	.buttonContainer {
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const StyledLink = styled(Link)`
	font-size: 22px;
	text-decoration: none;
	color: black;

	margin-top: 20px;
	margin-bottom: 10px;
	text-align: center;

	cursor: pointer;

	.underline {
		text-decoration: underline;
	}
`;

const CentralizerContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	padding-left: auto;
	padding-right: auto;
	padding-top: 110px;

	overflow-y: hidden;
	overflow-x: hidden;

	margin: auto;

	background-image: linear-gradient(to bottom right, #edf1f7, #dddddd);
`;

export { ElementsContainer, StyledLink, CentralizerContainer };
