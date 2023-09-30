import { styled } from "styled-components";
import {
	ElementsContainer,
} from "../styled/CommonStyles";

export default function MiauVisualizer({ clickedMiau }) {
	return (
		<Shadow width={"550px"} height={"800px"}>
			<PseudoShadow>
				<ElementsContainer>
					{clickedMiau && (
						<MiauVisualizerContainer>
							<ImageContainer>
								<img
									onClick={() => {
										alert(tags);
									}}
									src={clickedMiau.url}
									alt={clickedMiau.catname}
								/>
								<h2>{clickedMiau.catname}</h2>
							</ImageContainer>

							<TagContainer>
								{clickedMiau.tags &&
									clickedMiau.tags.map((tag, i) => {
										return (
											<Tag key={i}>
												<p>{tag.tag}</p>
											</Tag>
										);
									})}
							</TagContainer>
							<VisualizerDescription>
								<p>Dono: {clickedMiau.ownername}</p>
								<p>Telefone: {clickedMiau.number}</p>
								<p>{clickedMiau.description}</p>
							</VisualizerDescription>
						</MiauVisualizerContainer>
					)}
				</ElementsContainer>
			</PseudoShadow>
		</Shadow>
	);
}

const MiauVisualizerContainer = styled.div`
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
