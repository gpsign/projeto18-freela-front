import styled from "styled-components";

export const CatInfo = styled.div`
	min-height: 140px;
	max-height: fit-content;

	padding-left: 10px;
	padding-right: 10px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	background: rgb(233, 233, 233);
	background: radial-gradient(
		circle,
		rgba(233, 233, 233, 1) 15%,
		rgba(255, 255, 255, 1) 70%
	);
`;

export const CatName = styled.h1`
	font-family: "ProximaNovaBold";
	font-size: 22px !important;

	color: black;

	margin: 5px !important;
	white-space: wrap;

	max-height: 70px;

	overflow-y: hidden;
`;

export const CatDescription = styled.p`
	font-family: "ProximaNovaMedium";
	font-size: 16px !important;

	margin: 5px !important;
	color: rgb(80, 80, 80);
	line-height: 20px;

	word-break: break-word;
`;

export const TagContainer = styled.div`
	width: 100%;
	height: fit-content;
	max-height: 65px;

	display: flex;
	flex-wrap: wrap;

	overflow-y: scroll;

	margin-bottom: 1px;

	div:last-child {
		margin-right: 0px;
	}
`;

export const Tag = styled.div`
	width: fit-content;
	height: 18px;

	padding: 5px;

	margin: 2px 3px 2px 3px;

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
export const Gradient = styled.div`
	height: 10px;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 90%
	);
`;

export const CatContent = styled.div`
	width: 300px;
	height: 320px;

	position: relative;
	z-index: 1;

	background-image: url(${({ $url }) => $url});
	background-size: contain;

	border-radius: 8px;

	padding-top: 170px;
	overflow-y: scroll;

	filter: drop-shadow(0px 0px 5px gray);

	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: translateY(2px);
		transition: transform 0.1s ease-out;
	}
`;
