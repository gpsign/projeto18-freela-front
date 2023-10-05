import axios from "axios";

export async function getAllCatsList(setCatsList, setShowAlert, config) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	try {
		const catsRes = await axios.get(`${VITE_API_URL}/cats`, config);
		setCatsList(catsRes.data);
	} catch (err) {
		if (err.code === "ERR_NETWORK") {
			setAlert({ message: "Erro de Conexão", show: true });
		}
		setShowAlert({ show: true, message: "Por favor, faça login novamente!" });
	}
}
