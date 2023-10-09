import styled from "styled-components";

export const DataContainer = styled.div`
	width: 650px;
	height: fit-content;

	margin-top: 50px;
	padding: 20px;

	display: flex;
	flex-direction: column;

	border-radius: 4px;

	filter: drop-shadow(0px 5px 5px gray);

	background: rgb(233, 233, 233);
	background: radial-gradient(
		circle,
		rgba(233, 233, 233, 1) 15%,
		rgba(255, 255, 255, 1) 70%
	);

	font-family: "ProximaNovaMedium";

	overflow-y: scroll;

	h1 {
		font-family: "ProximaNovaMedium";
		font-size: 48px;
		color: black;
		margin: 20px 0px 10px 0px;
		filter: drop-shadow(0px 0px 2px gray);
	}

	form button {
		width: 28px;
		height: 28px;
		border: none;
		background-color: transparent;
		display: flex;
		align-items: center;
		margin-left: 10px;
		border-radius: 100%;
	}

	form {
		width: 450px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
