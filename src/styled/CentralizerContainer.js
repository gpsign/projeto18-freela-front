import { styled } from "styled-components";

const CentralizerContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-y: scroll;

	margin: auto;

	background-color: #fcf6e3;

	h1 {
		font-family: "Motley";
		font-size: 80px;

		margin-top: 50px;
		margin-bottom: 60px;
	}
`;

export default CentralizerContainer;
