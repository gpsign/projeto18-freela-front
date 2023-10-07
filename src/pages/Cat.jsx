import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Header } from "../components/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import styled from "styled-components";

export function Cat({ cat }) {
	const { catId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		//!cat && getCatData(catId);
	});

	return (
		<>
			<Alert />
			<Header />
			<CentralizerContainer>
				<DataContainer></DataContainer>
			</CentralizerContainer>
		</>
	);
}

const DataContainer = styled.div`
	width: 800px;
	height: 900px;

    margin-top: 50px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	border-radius: 4px;

	padding: 15px 0px 15px 0px;

	filter: drop-shadow(0px 5px 5px gray);

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	font-family: "ProximaNovaMedium";

	overflow-y: scroll;
`;
