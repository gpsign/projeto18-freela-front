import { Tag } from "../styled/CatCard.js";
import { TagLarge } from "../pages/Cat.jsx";

export function ArrayToTags({ array, $size }) {
	return array.map((tag, i) => {
		return $size === "large" ? (
			<TagLarge key={tag + i}>{tag.toUpperCase()}</TagLarge>
		) : (
			<Tag key={tag + i}>{tag.toUpperCase()}</Tag>
		);
	});
}
