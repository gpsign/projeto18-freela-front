import Header from "../components/Header";
import { styled } from "styled-components";
import CatCard from "../components/CatCard";
import MiauVisualizer from "../components/MiauVisualizer";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDataContext } from "../context/login";
import { redirectLoginIfNull, getAllCatsList } from "../utils/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";

export default function Home() {
	const [catsList, setCatsList] = useState([]);
	const navigate = useNavigate();
	const { token, config } = useContext(LoginDataContext);
	const [newCat, setNewCat] = useState({
		name: "",
		url: "",
		description: "",
	});

	//redirectLoginIfNull(useEffect, token, navigate);

	getAllCatsList(useEffect, setCatsList, config);

	return (
		<>
			<CentralizerContainer>
				<Header />
				<CatsGrid>
					{catsList.map((cat) => {
						return <CatCard cat={cat} />;
					})}
				</CatsGrid>
				<MiauVisualizer />
			</CentralizerContainer>
		</>
	);
}

const CatsGrid = styled.div`
	width: fit-content;
	height: 900px;

	border-radius: 4px;
	padding: 15px;

	margin-top: 200px;

	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, 400px);
	filter: drop-shadow(0px 5px 5px gray);
`;
