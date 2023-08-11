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
				<Shadow width={"1200px"} height={"800px"}>
					<PseudoShadow>
						<ElementsContainer>
							<HomeContainer>
								<MiausList>
									{testArr.map((t) => {
										return <MiauCard key={t} />;
									})}
								</MiausList>

								<MiauVisualizer></MiauVisualizer>
							</HomeContainer>
						</ElementsContainer>
					</PseudoShadow>
				</Shadow>
			</CentralizerContainer>
		</>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	height: 100%;

	padding: 20px;

	display: flex;
	justify-content: space-between;
`;

const MiausList = styled.ul`
	width: 600px;
	height: 100%;

	padding: 15px;

	background-color: #7d4f4f;
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

	background-color: #7d4f4f;
	border-radius: 28px;

	display: flex;
	flex-direction: column;

	padding: 8px;

	img {
		width: 100%;
		border-radius: 28px;
	}
`;
