import { useContext } from "react";
import { Alert } from "../components/Alert.jsx";
import { Header } from "../components/Header.jsx";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import styled from "styled-components";
import { DataContext } from "../context/data.jsx";

export function Profile() {
	const DataInfo = useContext(DataContext);
	const { userPhoto, username } = DataInfo;

	return (
		<>
			<Alert />
			<Header />
			<CentralizerContainer>
				<DataContainer>
					<UserTitle>
						<UserPhoto src={userPhoto} />
						<UserName>{username}</UserName>
					</UserTitle>
					<UserData></UserData>
				</DataContainer>
			</CentralizerContainer>
		</>
	);
}

export const DataContainer = styled.div`
	width: 700px;
	height: 900px;

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
`;

export const UserTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	color: black;
`;

export const UserPhoto = styled.img`
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

export const Data = styled.div`
	display: flex;
	line-height: 30px;
	padding: 10px;
	margin-top: 10px;
	border-radius: 4px;
	background-color: rgba(0, 0, 0, 0.06);
`;
