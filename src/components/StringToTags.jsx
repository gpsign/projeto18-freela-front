import { TagExample } from "../styled/NewCatWindow.js";

export function StringToTags({ text, small }) {
	return text.split(", ").map((tag, i) => {
		return (
			tag.trim() != "" && (
				<TagExample key={i}>{tag.toUpperCase().replace(",", "")}</TagExample>
			)
		);
	});
}
