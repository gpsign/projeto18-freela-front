import { DataContext } from "../context/data.jsx";
import { useContext } from "react";
import { NoResults } from "../styled/Home.js";
import { CatCard } from "./CatCard.jsx";

export function CatsToGrid() {
	const { catsList } = useContext(DataContext);
	return catsList.length > 0 ? (
		catsList.map((cat, i) => {
			return <CatCard key={i} cat={cat} />;
		})
	) : (
		<NoResults>NENHUM GATO ENCONTRADO =(</NoResults>
	);
}
