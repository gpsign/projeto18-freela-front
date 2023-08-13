import Header from "../components/Header";
import {
	CentralizerContainer,
	Shadow,
	PseudoShadow,
	ElementsContainer,
} from "../styled/CommonStyles";
import { styled } from "styled-components";
import MiauCard from "../components/MiauCard";
import { useState } from "react";

export default function Home() {
	const testArr = [1];
	const [showAddMiau, setShowAddMiau] = useState("true");

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

									<form>
										<input placeholder="Nome do Miau" />
										<input placeholder="URL da foto do modelo" />
										<textarea placeholder="Tags (Separe por vírgulas!)"></textarea>
										<textarea placeholder="Descrição do Miau" />
									</form>

									<div className="buttonContainer">
										<button>Adicionar!</button>
										<button
											className="Close"
											onClick={() => {
												setShowAddMiau("false");
											}}
										>
											<p>X</p>
										</button>
									</div>
								</ElementsContainer>
							</PseudoShadow>
						</Shadow>
					)}
				</ScreenDarknessContainer>
				<Shadow width={"600px"} height={"800px"}>
					<PseudoShadow>
						<ElementsContainer>
							<MiausList>
								{testArr.map((t) => {
									return <MiauCard key={t} />;
								})}
							</MiausList>
						</ElementsContainer>
					</PseudoShadow>
				</Shadow>

				<Shadow width={"550px"} height={"800px"}>
					<PseudoShadow>
						<ElementsContainer>
							<MiauVisualizer>
								<ImageContainer>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKAdWj_0-N6Jgt46u_s5SQaypaHiFQ5-bIw&usqp=CAU"
										alt="cat"
									/>

									<h2>monday</h2>
								</ImageContainer>

								<TagContainer>
									<Tag>
										<p>GATO</p>
									</Tag>{" "}
									<Tag>
										<p>Delicioso</p>
									</Tag>
									<Tag>
										<p>Saboroso</p>
									</Tag>
									<Tag>
										<p>Gostoso</p>
									</Tag>
									<Tag>
										<p>Gatoso</p>
									</Tag>
									<Tag>
										<p>Chiwa</p>
									</Tag>
									<Tag>
										<p>monday</p>
									</Tag>
								</TagContainer>
								<VisualizerDescription>
									<p>Dono: Tuesday José da Silva Jesus Almeida Megazord</p>
									<p>Telefone: 4002-8922</p>
									<p>
										Monday left me broken Tuesday, I was through with hoping
										Wednesday, my empty arms were open Thursday, waiting for
										love, waiting for loveMonday left me broken Tuesday, I was
										through with hoping Wednesday, my empty arms were open
										Thursday, waiting for love, waiting for loveMonday left me
										broken Tuesday, I was through with hoping Wednesday, my
										empty arms were open Thursday, waiting for love, waiting for
										loveMonday left me broken Tuesday, I was through with hoping
										Wednesday, my empty arms were open Thursday, waiting for
										love, waiting for love
									</p>
								</VisualizerDescription>
							</MiauVisualizer>
						</ElementsContainer>
					</PseudoShadow>
				</Shadow>
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

const MiauVisualizer = styled.div`
	width: 550px;
	height: 100%;

	background-color: #9b6162;
	border-radius: 28px;

	display: flex;
	flex-direction: column;

	padding: 8px;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: fit-content;

	border-radius: 28px;

	position: relative;

	img {
		width: 100%;
		height: 425px;
		border-radius: 28px;
		margin-bottom: 10px;
		transition: all 0.5s ease-out;
	}

	h2 {
		width: fit-content;
		padding: 8px;

		position: absolute;
		bottom: -5px;
		left: 10px;

		font-family: "Motley";
		font-size: 32px;

		background-color: #9b6162;
		color: #fcf6e3;

		border-radius: 28px;

		transition: all 0.5s ease-out;
	}

	&:hover {
		h2 {
			background-color: transparent;
			color: transparent;
			transition: all 0.5s ease-out;
		}

		img {
			transform: scale(1.04);
			transition: all 0.5s ease-out;
		}
	}
`;

const VisualizerDescription = styled.div`
	width: 100%;
	height: 257px;

	padding: 5px;

	border-radius: 28px;

	overflow-x: scroll;

	p {
		font-family: "AustieBost";
		font-size: 32px;

		margin-bottom: 10px;

		background-color: #7d4f4f;
		border-radius: 16px;

		padding: 10px;

		line-height: 38px;

		color: #fcf6e3;
	}

	p:last-child {
		font-family: "AustieBost";
		font-size: 22px;

		line-height: 28px;

		color: #fcf6e3;
	}
`;

const TagContainer = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-wrap: wrap;

	overflow-y: scroll;

	margin-bottom: 10px;

	div:not(:last-child) {
		margin-right: 0px;
	}
`;

const Tag = styled.div`
	width: fit-content;
	height: 38px;

	padding: 2px;

	margin: 3px;

	background-color: #fcf6e3;
	border-radius: 20px;

	flex-shrink: 0;

	p {
		padding: 3px;
		font-family: "Motley";
		font-size: 28px;

		color: #7d4f4f;
		border-radius: 12px;
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
