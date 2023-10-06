import styled from "styled-components";

export const SearchTitle = styled.div`
	height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Options = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-left: 8px;

	.selected {
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
		&:hover {
			cursor: default;
			background: rgb(41, 41, 41);
			background: radial-gradient(circle, #535353 0%, #464646 100%);
		}
		&:active {
			transform: none;
		}
	}
`;

export const LeftBox = styled.div`
	width: 300px;
	height: 670px;

	padding: 20px;

	border-radius: 8px;

	margin-top: 140px;

	background: rgb(41, 41, 41);
	background: radial-gradient(circle, #414141 0%, #333333 100%);

	font-family: "ProximaNovaBold";
	font-size: 21px !important;

	filter: drop-shadow(0px 0px 2px black);

	color: #ffffff;

	display: flex;
	flex-direction: column;
`;

export const Filter = styled.span`
	border-radius: 8px;
	height: 100%;

	font-size: 18px;

	padding: 5px;

	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
	}

	&:active {
		transform: scale(0.95);
		transition: transform 0.1s;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 40px;

	margin-top: 10px;

	border: none;
	border-radius: 8px;
	outline: none;

	background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

	padding-left: 12px;

	font-family: "ProximaNovaBold";
	font-size: 16px;

	&::placeholder {
		font-size: 16px;
		color: gray;
	}
`;

export const TagsTitle = styled.h2`
	margin-top: 25px;
	margin-bottom: 10px;
`;

export const Division = styled.div`
	width: 100%;
	height: 1px;
	background: rgb(83, 83, 83);
	background: radial-gradient(
		circle,
		rgba(83, 83, 83, 1) 40%,
		rgba(75, 75, 75, 1) 80%,
		rgba(218, 218, 218, 0) 100%
	);
`;

export const PopularTags = styled.ul`
	margin-top: 10px;
	width: 100%;
	height: fit-content;

	.selected {
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
	}
`;

export const TagLine = styled.li`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 9px;
	border-radius: 8px;

	& > p {
		font-size: 14px;
	}

	&:hover {
		cursor: pointer;
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
	}

	&:active {
		transform: scale(0.95);
		transition: transform 0.1s;
	}
`;
