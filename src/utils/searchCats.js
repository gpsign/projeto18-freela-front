import axios from "axios";

export async function searchCats(setCatsList, search, filter, config) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	if (search === "") return;
	try {
		const cats = await axios.get(
			`${VITE_API_URL}/cats?${filter}=${search}`,
			config
		);
		setCatsList(cats.data);
	} catch (err) {
		console.log(err);
	}
}
