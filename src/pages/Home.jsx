import Header from "../components/Header";
import {
	CentralizerContainer,
	Shadow,
	PseudoShadow,
	ElementsContainer,
} from "../styled/CommonStyles";
import { styled } from "styled-components";
import MiauCard from "../components/MiauCard";

export default function Home() {
	const testArr = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<>
			<CentralizerContainer>
				<Header />

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
			</CentralizerContainer>
		</>
	);
}

const MiausList = styled.ul`
	width: 600px;
	height: 100%;

	padding: 15px;

	background-color: #9B6162;
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

	background-color: #9B6162;
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

		background-color: #9B6162;
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

		background-color: #7D4F4F;
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
