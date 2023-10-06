import axios from "axios";

export async function searchCats(DataInfo, AuthInfo) {
	const { setCatsList, searchValue, filter, setAlert } = DataInfo;
	const { config } = AuthInfo;
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	if (searchValue === "") return;
	try {
		const cats = await axios.get(
			`${VITE_API_URL}/cats?${filter}=${searchValue}`,
			config
		);
		setCatsList(cats.data);
	} catch (err) {
		console.log(err);
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
