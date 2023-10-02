import axios from "axios";

export async function getUserCatsList(useEffect, config, setCatsList) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	async function getCats() {
		try {
			const res = await axios.get(`${VITE_API_URL}/cats/user`, config);
			setCatsList(res.data);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(getCats, []);
}
