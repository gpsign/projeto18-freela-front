import {
	CentralizerContainer,
	ElementsContainer,
	StyledLink,
} from "../styled/CommonStyles";
import { AuthContext } from "../context/authentication";
import { useContext, useState, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";

export default function Profile() {
	const { config, setToken, setConfig } = useContext(AuthContext);
	const [miausList, setMiausList] = useState();

	return (
		<CentralizerContainer>
			<Shadow width={"460px"} height={"720px"}>
				<PseudoShadow>
					<ElementsContainer>
						<MiausList>
							{miausList &&
								miausList.map((miau, i) => {
									return <MiauCard key={i} miauInfo={miau} />;
								})}
						</MiausList>
						<StyledLink to={"/home"}>Voltar para home</StyledLink>
						<StyledLink
							to={"/"}
							onClick={() => {
								exit();
							}}
						>
							Sair
						</StyledLink>
					</ElementsContainer>
				</PseudoShadow>
			</Shadow>
		</CentralizerContainer>
	);
}

function MiauCard({ miauInfo }) {
	const { catId, name, url, available } = miauInfo;
	const { config } = useContext(LoginDataContext);
	const [isAvailable, setIsAvailable] = useState(available);

	const VITE_API_URL = import.meta.env.VITE_API_URL;

	return (
		<MiauContent
			onClick={async () => {
				try {
					await axios.put(
						`${VITE_API_URL}/cats/${catId}`,
						{ available: !isAvailable },
						config
					);
					setIsAvailable(!isAvailable);
				} catch (err) {
					console.log(err);
				}
			}}
			available={isAvailable}
		>
			<img src={url} alt={name} />
			<MiauInfo>
				<h1>{name}</h1>
			</MiauInfo>
		</MiauContent>
	);
}

const MiausList = styled.ul`
	width: 450px;
	height: 600px;

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

const MiauContent = styled.li`
	width: 100%;
	height: 175px;

	padding: 5px;

	position: relative;

	background-color: ${({ available }) => (available ? "#a2dbbc" : "#e75353")};
	border-radius: 14px;
	flex-shrink: 0;

	transition: transform 0.1s ease-out, filter 0.15s ease-in-out;

	img {
		width: 175px;
		height: 100%;
		border-radius: 14px;
	}

	&:hover {
		filter: brightness(1.15);
		transition: filter 0.15s ease-in-out;
		cursor: pointer;
	}

	&:active {
		transform: scale(0.99);
		transition: transform 0.1s ease-out;
	}

	* {
		user-select: none;
	}
`;

const MiauInfo = styled.div`
	width: fit-content;
	height: 165px;

	position: absolute;
	top: 5px;
	left: 190px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	overflow-x: hidden;

	h1 {
		font-family: "Motley";
		font-size: 28px !important;

		color: black;

		margin: 5px !important;
		white-space: nowrap;
	}
`;
