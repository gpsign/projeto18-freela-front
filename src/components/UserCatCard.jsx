import { useState } from "react";
import { TrashIco, EditCatIco } from "../styled/Icons.js";
import {
	Ball,
	CatCard,
	CatData,
	CatDescription,
	Switch,
	TagContainer,
	TagMedium,
} from "../styled/UserCatCard.js";

export function UserCatCard({ cat }) {
	const [available, setAvailable] = useState(cat.available);

	return (
		<CatCard>
			<img src={cat.url} />
			<CatData>
				<h3>{cat.catName}</h3>
				<TagContainer>
					{cat.tags.map((tag) => {
						return <TagMedium>{tag}</TagMedium>;
					})}
				</TagContainer>

				<CatDescription>{cat.description}</CatDescription>
			</CatData>
			<Switch
				title={available ? "Disponível" : "Indisponível"}
				onClick={() => setAvailable(!available)}
				$on={available.toString()}
			>
				<Ball $on={available.toString()} />
			</Switch>
			<EditCatIco title='Editar Gato' />
			<TrashIco title='Deletar Gato' />
		</CatCard>
	);
}
