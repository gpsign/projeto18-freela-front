import styled from "styled-components";

export const CatContainer = styled.div`
	width: 700px;
	height: fit-content;

	margin-top: 50px;

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
`;

export const CatName = styled.h3`
	font-family: "ProximaNovaBold";
	font-size: 42px;
	margin-bottom: 5px;
	filter: drop-shadow(0px 0px 2px gray);
`;

export const CatData = styled.div`
	padding: 20px;
`;

export const CatDescription = styled.p`
	font-family: "ProximaNovaMedium";
	font-size: 22px !important;
	line-height: 24px !important;

	padding-top: 10px;

	border-radius: 4px;

	margin: 5px !important;
	color: rgb(80, 80, 80);
	line-height: 20px;

	word-break: break-word;
`;

export const CatPhoto = styled.img`
	width: 700px;
	object-fit: contain;
	filter: drop-shadow(0px 0px 5px gray);
`;

export const TagContainer = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-wrap: wrap;

	overflow-y: scroll;

	margin-bottom: 1px;

	div:last-child {
		margin-right: 0px;
	}
`;

export const TagLarge = styled.div`
	width: fit-content;

	padding: 6px;
	margin: 4px;

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

export const OwnerData = styled.div`
	width: 450px;
	height: fit-content;
	margin: 50px 0px 0px 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;

	position: sticky;
	top: 50px;

	border-radius: 4px;

	filter: drop-shadow(0px 5px 5px gray);

	font-family: "ProximaNovaMedium";

	background: rgb(233, 233, 233);
	background: radial-gradient(
		circle,
		rgba(233, 233, 233, 1) 15%,
		rgba(255, 255, 255, 1) 70%
	);

	button {
		height: 50px;
		width: fit-content;

		padding: 10px;

		border-radius: 4px;
		border: none;

		font-size: 22px;
		font-family: "ProximaNovaBold";
		margin: 20px auto 0px auto;

		filter: drop-shadow(0px 2px 4px lightgray);

		transition: filter 0.5s, transform 0.1s ease-out;

		background-image: linear-gradient(to right, #a6eca8, #a6ecb8);

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

export const OwnerTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
`;

export const OwnerPhoto = styled.img`
	border-radius: 100%;
	object-fit: contain;
	width: 48px;
	filter: drop-shadow(0px 0px 3px gray);
`;

export const OwnerName = styled.h2`
	font-family: "ProximaNovaMedium";
	font-size: 36px;
	color: black;
	margin-left: 15px;
`;

export const OwnerContact = styled.div`
	display: flex;
	flex-direction: column;

	color: black;
	font-size: 22px;
	display: inline;
`;

export const Contact = styled.div`
	display: flex;
	line-height: 30px;
	padding: 10px;
	margin-top: 10px;
	border-radius: 4px;
	background-color: rgba(0, 0, 0, 0.06);
`;
