import styled from "styled-components";

export const CatsGrid = styled.div`
	width: fit-content;
	max-height: 835px;
	height: fit-content;

	border-radius: 4px;
	margin-left: 20px;
	margin-top: 130px;

	padding: 10px;
	overflow-y: scroll;

	display: grid;
	grid-gap: 30px;
	grid-template-columns: repeat(4, 300px);
`;

export const NoResults = styled.div`
	width: 980px;
	height: 100%;

	margin-left: 100px;

	text-align: center;

	font-family: "ProximaNovaBold";
	font-size: 60px;
	color: gray;

	filter: drop-shadow(0px 0px 3px gray);

	display: flex;
	justify-content: center;
	align-items: center;
`;
