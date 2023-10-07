import {
	CatContent,
	Gradient,
	CatInfo,
	CatName,
	TagContainer,
	CatDescription,
} from "../styled/CatCard.js";
import { ArrayToTags } from "../components/index.js";
import { DataContext } from "../context/data.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export function CatCard({ cat }) {
	const { setCatPage } = useContext(DataContext);
	const navigate = useNavigate();
	return (
		<CatContent
			$url={cat.url}
			onClick={() => {
				setCatPage(cat);
				navigate("/cat/" + cat.catId);
			}}
		>
			<Gradient />
			<CatInfo>
				<CatName>{cat.catName}</CatName>
				<TagContainer>
					<ArrayToTags array={cat.tags} />
				</TagContainer>

				<CatDescription>{cat.description}</CatDescription>
			</CatInfo>
		</CatContent>
	);
}
