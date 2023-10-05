import { styled } from "styled-components";
import { CatCard, Header } from "../components/index.js";
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authentication.jsx";
import {
	redirectLoginIfNull,
	getAllCatsList,
	logout,
	searchCats,
} from "../utils/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import { Alert } from "../components/Alert.jsx";
import { getPopularTagsList } from "../utils/getPopularTagsList.js";

var timeout = null;

export default function Home() {
	const [catsList, setCatsList] = useState([]);
	const [tagsList, setTagsList] = useState([]);
	const [filter, setFilter] = useState("name");
	const [searchValue, setSearchValue] = useState("");
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

	const input = useRef(null);

	useEffect(() => {
		redirectLoginIfNull(token, navigate);

		searchValue != ""
			? searchCats(setCatsList, searchValue, filter, config)
			: getAllCatsList(setCatsList, setShowAlert, config);

		getPopularTagsList(setTagsList, setShowAlert, config);
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
				<LeftBox>
					<SearchTitle>
						Pesquisar:
						<Options>
							<Filter
								className={filter === "name" ? "selected" : ""}
								onClick={() => {
									setFilter("name");
									searchCats(setCatsList, searchValue, "name", config);
								}}
							>
								Nome
							</Filter>
							|
							<Filter
								className={filter === "tags" ? "selected" : ""}
								onClick={() => {
									setFilter("tags");
									searchCats(setCatsList, searchValue, "tags", config);
								}}
							>
								Tags
							</Filter>
						</Options>
					</SearchTitle>
					<SearchInput
						ref={input}
						placeholder={filter === "name" ? "Nomes" : "Tags"}
						onChange={async (e) => {
							clearTimeout(timeout);
							setSearchValue(e.target.value);
							timeout = setTimeout(async function () {
								e.target.value != ""
									? await searchCats(
											setCatsList,
											e.target.value,
											filter,
											config
									  )
									: await getAllCatsList(setCatsList, setShowAlert, config);
							}, 400);
						}}
					/>
					<TagsTitle>Tags Populares:</TagsTitle>
					<PopularTags>
						{tagsList.map((row) => {
							return (
								<>
									<Division />
									<TagLine
										onClick={() => {
											setSearchValue(row.tag.toUpperCase());
											setFilter("tags");
											searchCats(setCatsList, row.tag, "tags", config);
											input.current.value = row.tag;
										}}
									>
										<p>{row.tag.toUpperCase()}</p>
										<p>{row.popularity}</p>
									</TagLine>
								</>
							);
						})}
						<Division />
					</PopularTags>
				</LeftBox>
				<CatsGrid>
					{catsList.length > 0 ? (
						catsList.map((cat, i) => {
							return <CatCard key={i} cat={cat} />;
						})
					) : (
						<NoResults>NENHUM GATO ENCONTRADO =(</NoResults>
					)}
				</CatsGrid>
			</CentralizerContainer>
		</>
	);
}

const SearchTitle = styled.div`
	height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Options = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-left: 8px;

	.selected {
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
		&:hover {
			cursor: default;
			background: rgb(41, 41, 41);
			background: radial-gradient(circle, #535353 0%, #464646 100%);
		}
		&:active {
			transform: none;
		}
	}
`;

const LeftBox = styled.div`
	width: 300px;
	height: 630px;

	padding: 20px;

	border-radius: 8px;

	background: rgb(41, 41, 41);
	background: radial-gradient(circle, #414141 0%, #333333 100%);

	font-family: "ProximaNovaBold";
	font-size: 21px !important;

	filter: drop-shadow(0px 0px 2px black);

	color: #ffffff;

	display: flex;
	flex-direction: column;
`;

const Filter = styled.span`
	border-radius: 8px;
	height: 100%;

	font-size: 18px;

	padding: 5px;

	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
	}

	&:active {
		transform: scale(0.95);
		transition: transform 0.1s;
	}
`;

const SearchInput = styled.input`
	width: 100%;
	height: 40px;

	margin-top: 10px;

	border: none;
	border-radius: 8px;
	outline: none;

	background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

	padding-left: 12px;

	font-family: "ProximaNovaBold";
	font-size: 16px;

	&::placeholder {
		font-size: 16px;
		color: gray;
	}
`;

const TagsTitle = styled.h2`
	margin-top: 30px;
	margin-bottom: 10px;
`;

const Division = styled.div`
	width: 100%;
	height: 1px;
	background: rgb(83, 83, 83);
	background: radial-gradient(
		circle,
		rgba(83, 83, 83, 1) 40%,
		rgba(75, 75, 75, 1) 80%,
		rgba(218, 218, 218, 0) 100%
	);
`;

const PopularTags = styled.ul`
	margin-top: 10px;
	width: 100%;
	height: fit-content;
`;

const TagLine = styled.li`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	border-radius: 8px;

	& > p {
		font-size: 14px;
	}

	&:hover {
		cursor: pointer;
		background: rgb(41, 41, 41);
		background: radial-gradient(circle, #535353 0%, #464646 100%);
	}

	&:active {
		transform: scale(0.95);
		transition: transform 0.1s;
	}
`;

const CatsGrid = styled.div`
	min-height: 630px;
	width: fit-content;
	height: fit-content;

	border-radius: 4px;
	margin-left: 30px;

	display: grid;
	grid-gap: 30px;
	grid-template-columns: repeat(4, 300px);
`;

const NoResults = styled.div`
	width: 980px;
	height: 100%;

	margin-left: 100px;

	text-align: center;

	font-family: "ProximaNovaBold";
	font-size: 60px;
	color: gray;

	filter: drop-shadow(0px 0px 3px gray);

	display: flex;
	justify-content: center;
	align-items: center;
`;
