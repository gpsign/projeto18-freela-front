import styled from "styled-components";

export const Message = styled.p`
	font-family: "ProximaNovaMedium";
	font-size: 22px !important;

	color: #525252;
	line-height: 25px;

	text-align: center;

	word-break: break-word;
`;

export const AlertContainer = styled.div`
	width: 325px;
	height: fit-content;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	margin: auto;

	border-radius: 3px;

	padding: 20px 0px 20px 0px;

	filter: drop-shadow(0px 5px 5px gray);

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	font-family: "ProximaNovaMedium";

	h2 {
		font-size: 50px;
		color: black;
		text-align: center;
		margin-bottom: 20px;

		filter: drop-shadow(0px 0px 5px gray);
	}

	button {
		height: 50px;
		width: 60px;

		background-image: linear-gradient(to right, #a6eca8, #a6ecb8);

		border-radius: 4px;
		border: none;

		font-size: 22px;
		font-family: "ProximaNovaBold";

		filter: drop-shadow(0px 2px 4px lightgray);

		margin-top: 20px;

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
`;
