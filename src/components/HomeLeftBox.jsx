import { useContext, useState, useRef, Fragment } from "react";
import {
	TagLine,
	TagsTitle,
	Division,
	Filter,
	LeftBox,
	Options,
	PopularTags,
	SearchInput,
	SearchTitle,
} from "../styled/HomeLeftBox.js";
import { DataContext, AuthContext } from "../context/index.js";
import { searchCats, getAllCatsList } from "../utils/index.js";
import { useNavigate } from "react-router-dom";

var timeout = null;

export function HomeLeftBox() {
	const DataInfo = useContext(DataContext);
	const AuthInfo = useContext(AuthContext);

	const {
		filter,
		setFilter,
		setCatsList,
		searchValue,
		setSearchValue,
		tagsList,
		setAlert,
	} = DataInfo;
	const { config, setConfig, setToken } = AuthInfo;

	const [selectedTag, setSelectedTag] = useState("");
	const input = useRef(null);
	const navigate = useNavigate();

	return (
		<LeftBox>
			<SearchTitle>
				Pesquisar:
				<Options>
					<Filter
						className={filter === "name" ? "selected" : ""}
						onClick={() => {
							setFilter("name");
							searchCats(DataInfo, AuthInfo);
						}}
					>
						Nome
					</Filter>
					|
					<Filter
						className={filter === "tags" ? "selected" : ""}
						onClick={() => {
							setFilter("tags");
							searchCats({ ...DataInfo, filter: "tags" }, AuthInfo);
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
									{ ...DataInfo, searchValue: e.target.value },
									AuthInfo
							  )
							: await getAllCatsList(DataInfo, AuthInfo);
					}, 400);
				}}
			/>
			<TagsTitle>Tags Populares:</TagsTitle>
			<PopularTags>
				{tagsList.map((row, i) => {
					return (
						<Fragment key={"Fragment " + row.tag}>
							<Division key={"Division " + row.tag} />
							<TagLine
								key={"Line " + row.tag}
								className={selectedTag === row.tag ? "selected" : ""}
								onClick={() => {
									if (selectedTag === row.tag) {
										getAllCatsList(DataInfo, AuthInfo);
										input.current.value = "";
										setSelectedTag("");
										setSearchValue("");
									} else {
										setSelectedTag(row.tag);
										setSearchValue(row.tag.toUpperCase());
										setFilter("tags");
										searchCats(
											{ ...DataInfo, searchValue: row.tag, filter: "tags" },
											AuthInfo
										);
										input.current.value = row.tag;
									}
								}}
							>
								<p key={"Name" + row.tag}>{row.tag.toUpperCase()}</p>
								<p key={"Count " + row.tag}>{row.popularity}</p>
							</TagLine>
						</Fragment>
					);
				})}
				<Division />
			</PopularTags>
		</LeftBox>
	);
}
