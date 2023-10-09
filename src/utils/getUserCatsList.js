import axios from "axios";

export async function getUserCatsList(setUserCats, AuthInfo) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const { config } = AuthInfo;

	try {
		const res = await axios.get(`${VITE_API_URL}/cats/user`, config);
		setUserCats(res.data);
	} catch (err) {
		console.log(err);
	}
}
