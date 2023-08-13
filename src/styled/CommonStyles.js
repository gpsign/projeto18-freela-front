import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ElementsContainer = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	top: -4px;
	left: 2px;
	z-index: 3;

	display: flex;
	flex-direction: column;

	background-color: #9b6162;

	border-radius: 28px;

	font-family: "ShiftyNotes";

	overflow-y: scroll;

	h2 {
		font-size: 58px;
		color: #fcf6e3;

		margin-top: 24px;
		margin-bottom: 26px;
		text-align: center;
	}

	input {
		width: 400px;
		height: 60px;

		border: none;
		border-radius: 12px;
		outline: none;

		margin: 0px 25px 25px 20px;
		padding-left: 8px;

		font-size: 28px;
		letter-spacing: 2px;

		&::placeholder {
			font-family: "ShiftyNotes";
			font-size: 28px;
		}
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
		width: 200px;
		height: 50px;

		background-color: #a2dbbc;

		border-radius: 28px;
		border: none;

		font-family: "ShiftyNotes";
		font-size: 28px;

		transition: filter 0.5s, transform 0.1s ease-out;

		&:hover {
			filter: brightness(1.1);
			transition: filter 0.5s;

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
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const PseudoShadow = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	top: -6px;
	left: 3px;
	z-index: 2;

	background-color: #fcf6e3;

	border-radius: 28px;
`;

const Shadow = styled.div`
	width: ${({ width }) => width};
	height: ${({ height }) => height};

	margin-left: 10px;
	margin-right: 10px;

	position: relative;
	z-index: 1;

	background-color: #dbc1ac;

	border-radius: 28px;
`;

const StyledLink = styled(Link)`
	font-size: 22px;
	text-decoration: none;
	color: #fcf6e3;

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

	background-color: #fcf6e3;
`;

export {
	ElementsContainer,
	Shadow,
	PseudoShadow,
	StyledLink,
	CentralizerContainer,
};
