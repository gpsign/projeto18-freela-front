import styled from "styled-components";

export const WindowContainer = styled.div`
	width: 900px;
	height: 630px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	margin: auto;

	border-radius: 3px;

	padding: 30px;

	filter: drop-shadow(0px 5px 5px gray);

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	font-family: "ProximaNovaBold";

	img {
		width: 350px;
		height: 350px;
		object-fit: cover;
		border-radius: 14px;
		filter: drop-shadow(0px 5px 5px gray);
	}

	h3 {
		max-width: 350px;
		max-height: 70px;
		font-size: 38px;
		color: black;
		text-align: center;
		margin-bottom: 20px;
		word-break: break-word;
		overflow-y: hidden;
		margin-top: 20px;

		filter: drop-shadow(0px 0px 5px gray);
	}

	.confirm {
		background-image: linear-gradient(to right, #a6eca8, #a6ecb8);
	}

	.cancel {
		background-image: linear-gradient(to right, #ffb7b7, #ffb5b5);
	}

	button {
		height: 50px;
		width: fit-content;

		padding: 10px;

		border-radius: 4px;
		border: none;

		font-size: 22px;
		font-family: "ProximaNovaBold";

		filter: drop-shadow(0px 2px 4px lightgray);

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

	input {
		width: 450px;
		height: 60px;

		border: none;
		border-radius: 8px;
		outline: none;

		background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

		padding-left: 14px;
		margin: 0px 0px 10px 0px;

		font-size: 22px;

		&::placeholder {
			font-size: 22px;
		}

		font-family: "ProximaNovaBold";
	}

	textarea {
		width: 450px;
		height: 170px;

		border: none;
		border-radius: 8px;
		outline: none;

		background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

		padding-left: 14px;
		padding-top: 14px;
		margin: 10px 0px 0px 0px;

		font-size: 22px;

		&::placeholder {
			font-size: 20px;
		}

		resize: none;

		font-family: "ProximaNovaBold";
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;

export const RightBox = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const LeftBox = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const ButtonsContainer = styled.div`
	height: 90px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const CatContent = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: space-between;
`;

export const TagContainer = styled.div`
	width: 100%;
	max-width: 350px;
	height: fit-content;
	max-height: 130px;

	display: flex;
	flex-wrap: wrap;

	overflow-y: scroll;

	margin-bottom: 1px;

	div:last-child {
		margin-right: 0px;
	}

	filter: drop-shadow(0px 0px 3px gray);
`;

export const TagExample = styled.div`
	width: fit-content;
	height: fit-content;

	padding: 5px;

	margin: 5px 8px 5px 8px;

	background: rgb(65, 65, 65);
	background: radial-gradient(
		circle,
		rgba(65, 65, 65, 1) 50%,
		rgba(41, 41, 41, 1) 100%
	);
	font-family: "ProximaNovaMedium";
	font-size: 22px;
	color: white;
`;
