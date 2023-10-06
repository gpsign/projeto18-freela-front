import {
	CatContent,
	Gradient,
	CatInfo,
	CatName,
	TagContainer,
	CatDescription,
} from "../styled/CatCard.js";
import { ArrayToTags } from "../components/index.js";

export function CatCard({ cat }) {
	return (
		<CatContent $url={cat.url}>
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
