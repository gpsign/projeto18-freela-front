import axios from "axios";

export async function getAllCatsList(useEffect, setCatsList, config) {
	useEffect(() => {
		const VITE_API_URL = import.meta.env.VITE_API_URL;

		async function getList() {
			try {
				const catsRes = await axios.get(`${VITE_API_URL}/cats`, config);
				setCatsList(catsRes.data);
			} catch (err) {
				console.log(err);
			}
		}

		getList();
	}, []);
}
