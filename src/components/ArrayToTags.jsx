import { Tag } from "../styled/CatCard.js";

export function ArrayToTags({ array }) {
	return array.map((tag, i) => {
		return <Tag key={tag + i}>{tag.toUpperCase()}</Tag>;
	});
}
