import styled from "styled-components";

export const CatCard = styled.div`
	width: 100%;
	height: 200px;

	position: relative;

	display: flex;
	align-items: center;

	padding: 15px;
	margin: 5px 0px 5px 0px;

	background-color: rgba(0, 0, 0, 0.04);

	border-radius: 4px;

	img {
		width: 170px;
		height: 170px;
		object-fit: cover;
		border-radius: 4px;
		filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
	}
`;

export const CatData = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;

	padding-left: 10px;
	margin-right: 15px;

	h3 {
		max-width: 380px;
		font-family: "ProximaNovaMedium";
		font-size: 28px;
		color: black;
		margin-bottom: 4px;
		overflow: hidden;
		filter: drop-shadow(0px 0px 2px gray);
	}
`;

export const TagContainer = styled.div`
	width: 310px;
	height: fit-content;
	max-height: 50px;

	display: flex;
	flex-wrap: wrap;

	overflow-y: scroll;

	div:last-child {
		margin-right: 0px;
	}

	filter: drop-shadow(0px 0px 3px gray);
`;

export const TagMedium = styled.div`
	width: fit-content;
	height: fit-content;

	padding: 5px;

	margin: 2px 4px 2px 4px;

	background: rgb(65, 65, 65);
	background: radial-gradient(
		circle,
		rgba(65, 65, 65, 1) 50%,
		rgba(41, 41, 41, 1) 100%
	);
	font-family: "ProximaNovaMedium";
	font-size: 10px;
	color: white;
`;

export const CatDescription = styled.p`
	max-width: 310px;
	height: fit-content;
	max-height: 90px;
	font-family: "ProximaNovaMedium";
	font-size: 16px !important;

	padding: 5px;
	color: rgb(80, 80, 80);
	line-height: 17px;

	overflow-y: scroll;

	word-break: break-word;
`;

export const Switch = styled.button`
	position: relative;

	cursor: pointer;

	background-color: ${({ $on }) => ($on === "true" ? "#a6ecbb" : "#ffa5a5")};

	border: 2px solid rgb(100,100,100);
	border-radius: 30px;
	width: 70px;
	height: 34px;
	filter: drop-shadow(0px 2px 2px darkgray);
	transition: all 0.2s ease-out;
`;

export const Ball = styled.div`
	width: 26px;
	height: 26px;
	border-radius: 100%;
	position: absolute;
	top: 2px;
	left: ${({ $on }) => ($on == "true" ? "38px" : "2px")};
	background: rgb(233, 233, 233);
	background: rgb(255, 255, 255);
	background: linear-gradient(
		210deg,
		rgba(255, 255, 255, 1) 50%,
		rgba(233, 233, 233, 1) 89%
	);
	filter: drop-shadow(0px 1px 2px darkgray);
	transition: all 0.2s ease-out;
`;
