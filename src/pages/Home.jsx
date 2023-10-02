import { styled } from "styled-components";
import { CatCard, Header } from "../components/index.js";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authentication.jsx";
import { redirectLoginIfNull, getAllCatsList } from "../utils/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";

export default function Home() {
	const [catsList, setCatsList] = useState([]);
	const navigate = useNavigate();
	const { token, config } = useContext(AuthContext);
	const [newCat, setNewCat] = useState({
		name: "",
		url: "",
		description: "",
	});

	redirectLoginIfNull(useEffect, token, navigate);

	getAllCatsList(useEffect, setCatsList, config);

	return (
		<>
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
	filter: drop-shadow(0px 0px 5px gray);
`;
