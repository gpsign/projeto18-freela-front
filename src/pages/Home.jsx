import { styled } from "styled-components";
import { CatCard, Header } from "../components/index.js";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authentication.jsx";
import { redirectLoginIfNull, getAllCatsList, logout } from "../utils/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import { Alert } from "../components/Alert.jsx";

export default function Home() {
	const [catsList, setCatsList] = useState([]);
	const navigate = useNavigate();
	const { token, setToken, config, setConfig } = useContext(AuthContext);
	const [showAlert, setShowAlert] = useState({
		show: false,
		message: "",
	});
	const [newCat, setNewCat] = useState({
		name: "",
		url: "",
		description: "",
	});

	useEffect(() => {
		redirectLoginIfNull(token, navigate);
		getAllCatsList(setCatsList, setShowAlert, config);
	}, []);

	return (
		<>
			{showAlert.show && (
				<Alert
					message={showAlert.message}
					onConfirm={() => {
						logout(setConfig, setToken, navigate);
					}}
					setShow={setShowAlert}
				/>
			)}
			<CentralizerContainer>
				<Header />
				<CatsGrid>
					{catsList.map((cat, i) => {
						return <CatCard key={i} cat={cat} />;
					})}
				</CatsGrid>
			</CentralizerContainer>
		</>
	);
}

const CatsGrid = styled.div`
	width: fit-content;
	height: fit-content;

	border-radius: 4px;
	padding: 15px;

	margin: 100px 0px 0px 0px;

	display: grid;
	grid-gap: 30px;
	grid-template-columns: repeat(5, 300px);
`;
