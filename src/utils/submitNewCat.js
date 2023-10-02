import axios from "axios";

export async function submitNewCat(newCat, config) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	try {
		const res = await axios.post(`${VITE_API_URL}/cats`, newCat, config);
		console.log(newCat);
		if (res.status === 201) {
			return true;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
}
