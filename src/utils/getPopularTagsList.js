import axios from "axios";

export async function getPopularTagsList(DataInfo, AuthInfo) {
	const { setTagsList, setAlert } = DataInfo;
	const { config } = AuthInfo;

	const VITE_API_URL = import.meta.env.VITE_API_URL;
	try {
		const tagsRes = await axios.get(`${VITE_API_URL}/tags`, config);
		setTagsList(tagsRes.data);
	} catch (err) {
		if (err.code === "ERR_NETWORK") {
			setAlert({ message: "Erro de Conexão", show: true });
		}
		setAlert({
			show: true,
			message: "Por favor, faça login novamente!",
			onConfirm: "logout",
		});
	}
}
