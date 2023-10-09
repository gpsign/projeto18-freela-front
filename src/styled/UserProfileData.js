import styled from "styled-components";

export const UserTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	color: black;
`;

export const PhotoContainer = styled.div`
	width: 100px;
	height: 100px;
	position: relative;
`;

export const EditOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	color: transparent;

	width: 100px;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 100%;

	transition: all 0.2s;

	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.6);
		color: white;

		transition: all 0.2s;
	}

	&:active{
		:first-child{
			transform: translateY(1px);
			transition: all 0.2s;
		}
	}
`;

export const UserPhoto = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 100%;
	object-fit: contain;
	width: 100px;
	filter: drop-shadow(0px 0px 5px gray);
`;

export const UserName = styled.h2`
	font-family: "ProximaNovaMedium";
	font-size: 48px;
	color: black;
	margin-left: 20px;
	filter: drop-shadow(0px 0px 2px gray);
`;

export const UserData = styled.div`
	display: flex;
	flex-direction: column;

	color: black;
	font-size: 22px;
	display: inline;
`;

export const DataLine = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;

	padding: 4px 0px 4px 10px;

	color: black;

	font-family: "ProximaNovaBold";
	p {
		text-align: left;
		width: 100px;
		margin-right: 10px;
	}
`;

export const Data = styled.input`
	height: 40px;
	width: fit-content !important;
	max-width: 300px;

	margin: 8px 0px 8px 10px;

	border: none;
	border-radius: 8px;
	outline: none;

	background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

	font-size: 22px;

	font-family: "ProximaNovaBold";
	text-align: center;

	&::placeholder {
		font-size: 20px;
	}

	&:disabled {
		background-image: none;
		background-color: rgba(0, 0, 0, 0);
	}
`;

export const DataDivision = styled.div`
	width: 100%;
	height: 1.1px;
	background: rgb(83, 83, 83);
	background: radial-gradient(
		circle,
		#c5c5c5 20%,
		#d6d6d6 60%,
		rgba(218, 218, 218, 0) 100%
	);
`;
