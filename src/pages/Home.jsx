import Header from "../components/Header";
import {
	CentralizerContainer,
	ElementsContainer,
} from "../styled/CommonStyles";
import { styled } from "styled-components";
import MiauCard from "../components/MiauCard";
import MiauVisualizer from "../components/MiauVisualizer";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDataContext } from "../context/login";
import axios from "axios";

export default function Home() {
	const [showAddMiau, setShowAddMiau] = useState("false");
	const [miausList, setMiausList] = useState([]);
	const [clickedMiau, setClickedMiau] = useState({});

	const [newMiauName, setNewMiauName] = useState("");
	const [newMiauUrl, setNewMiauUrl] = useState("");
	const [newMiauTags, setNewMiauTags] = useState("");
	const [newMiauDescription, setNewMiauDescription] = useState("");

	const navigate = useNavigate();

	const { token, config, userId } = useContext(LoginDataContext);

	const VITE_API_URL = import.meta.env.VITE_API_URL;

	async function updateList() {
		try {
			console.log(config);
			const catsRes = await axios.get(`${VITE_API_URL}/cats`, config);
			setMiausList(catsRes.data);
		} catch (err) {
			console.log(err);
		}
	}

	async function submitMiau() {
		const newMiau = {
			ownerId: userId,
			name: newMiauName,
			url: newMiauUrl,
			description: newMiauDescription,
		};

		try {
			const res = await axios.post(`${VITE_API_URL}/miau`, newMiau, config);
			console.log(newMiau);
			if (res.status === 201) {
				setShowAddMiau("false");
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		console.log("o token na home é", token);
		if (token === "null") {
			navigate("/");
		} else {
			updateList();
		}
	}, []);

	return (
		<>
			<CentralizerContainer>
				<Header />
				<ScreenDarknessContainer show={showAddMiau}>
					{showAddMiau === "true" && (
						<Shadow width={"450px"} height={"680px"}>
							<PseudoShadow>
								<ElementsContainer>
									<h2>Adicionar seu Miau</h2>

									<form
										onSubmit={(e) => {
											e.preventDefault();
											submitMiau();
										}}
									>
										<input
											placeholder='Nome do Miau'
											onChange={(e) => {
												setNewMiauName(e.target.value);
											}}
											required
										/>
										<input
											placeholder='URL da foto do modelo'
											onChange={(e) => {
												setNewMiauUrl(e.target.value);
											}}
											required
										/>
										<textarea
											placeholder='Tags (Separe por vírgulas!)'
											onChange={(e) => {
												setNewMiauTags(e.target.value);
											}}
										/>
										<textarea
											placeholder='Descrição do Miau'
											onChange={(e) => {
												setNewMiauDescription(e.target.value);
											}}
										/>
										<div className='buttonContainer'>
											<button type='submit'>Adicionar!</button>
											<button
												className='Close'
												onClick={() => {
													setShowAddMiau("false");
												}}
											>
												<p>X</p>
											</button>
										</div>
									</form>
								</ElementsContainer>
							</PseudoShadow>
						</Shadow>
					)}
				</ScreenDarknessContainer>
				<Shadow width={"600px"} height={"800px"}>
					<PseudoShadow>
						<ElementsContainer>
							<MiausList>
								{miausList &&
									miausList.map((cat) => {
										return (
											<MiauCard
												key={cat.catId}
												id={cat.catId}
												catname={cat.catName}
												description={cat.description}
												url={cat.url}
												ownername={cat.owner.userName}
												number={cat.owner.phone}
												tags={cat.tags}
												setClickedMiau={setClickedMiau}
												clickedMiau={clickedMiau}
											/>
										);
									})}
							</MiausList>
						</ElementsContainer>
					</PseudoShadow>
				</Shadow>
				<MiauVisualizer clickedMiau={clickedMiau} />
				<AddMiauButton
					onClick={() => {
						setShowAddMiau("true");
					}}
				>
					<div>
						<p> Miau +</p>
					</div>
				</AddMiauButton>
			</CentralizerContainer>
		</>
	);
}

const MiausList = styled.ul`
	width: 600px;
	height: 100%;

	padding: 15px;

	background-color: #9b6162;
	border-radius: 28px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-shrink: 0;

	overflow-y: scroll;

	li:not(:last-child) {
		margin-bottom: 15px;
	}
`;

const AddMiauButton = styled.button`
	width: 240px;
	height: 80px;

	position: fixed;
	bottom: 5%;
	right: 3%;

	border-radius: 80px;
	background-color: #a2dbbc;

	outline: none;
	border: none;

	overflow-x: hidden;

	cursor: pointer;

	transition: all 0.5s ease-out;

	filter: brightness(1.1);

	div {
		position: relative;
	}

	p {
		font-family: "AustieBost";
		font-size: 64px;

		white-space: nowrap;

		position: absolute;
		bottom: -38px;
		right: 23px;
	}

	&:not(:hover) {
		width: 80px;
		filter: brightness(1);
	}

	&:active {
		transform: scale(0.9);
	}
`;

const ScreenDarknessContainer = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	display: ${({ show }) => (show === "true" ? "flex;" : "flex;")};
	justify-content: center;
	align-items: center;

	background-color: ${({ show }) =>
		show === "true" ? "rgba(0, 0, 0, 0.6);" : "rgba(0, 0, 0, 0);"};

	pointer-events: ${({ show }) => (show === "true" ? "auto;" : "none;")};

	transition: all 0.2s ease-out;
`;
