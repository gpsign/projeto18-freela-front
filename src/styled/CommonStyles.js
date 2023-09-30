import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ElementsContainer = styled.div`
	width: 500px;
	height: 550px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	border-radius: 3px;

	padding: 15px 0px 15px 0px;

	filter: drop-shadow(0px 5px 5px gray);

	background-color: #ffffff;

	font-family: "ProximaNovaMedium";

	overflow-y: scroll;

	h2 {
		font-size: 58px;
		margin-top: 34px;
		margin-bottom: 35px;
		color: black;
		text-align: center;
	}

	form{
		width: 100%;
		padding: 0px 25px 0px 25px;
		margin: 30px 0px 30px 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	form > input {
		width: 100%;
		height: 65px;

		border: none;
		border-radius: 8px;
		outline: none;

		background-image: linear-gradient(to bottom right, #ECF0F6, #E6E9EC);

		padding-left: 18px;
		margin: 15px 0px 15px 0px;

		font-size: 22px;

		&::placeholder {
			font-size: 20px;
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

	form > button {
		height: 60px;
		width: 130px;

		background-image: linear-gradient(to right, #8deeae, #9effaf);

		border-radius: 4px;
		border: none;

		font-size: 26px;
		font-family: "ProximaNovaBold";

		filter: drop-shadow(0px 3px 3px gray);

		margin-top: 20px;
		

		transition: filter 0.5s, transform 0.1s ease-out;

		&:hover {
			filter: brightness(0.97) drop-shadow(0px 3px 3px gray);;
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
	font-size: 18px;
	text-decoration: none;
	color: black;

	margin-top: 20px;
	margin-bottom: 10px;
	text-align: center;

	cursor: pointer;

	.underline {
		text-decoration: underline;
		filter: drop-shadow(1px 1px 6px gray)
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

	overflow-y: hidden;
	overflow-x: hidden;

	margin: auto;

	background-image: linear-gradient(to bottom right, #edf1f7, #dddddd);
`;

export { ElementsContainer, StyledLink, CentralizerContainer };
