import axios from "axios";

export async function getPopularTagsList(setTagsList, setShowAlert, config) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	try {
		const tagsRes = await axios.get(`${VITE_API_URL}/tags`, config);
		setTagsList(tagsRes.data);
	} catch (err) {
		console.log(err);
		setShowAlert({ show: true, message: "Por favor, faça login novamente!" });
	}
}
