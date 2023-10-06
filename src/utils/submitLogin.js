import axios from "axios";

export async function submitLogin(
	loginInputs,
	setToken,
	setConfig,
	setAlert,
	setUserPhoto,
	navigate
) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	try {
		const loginRes = await axios.post(`${VITE_API_URL}/sign-in`, loginInputs);
		const res = loginRes.data;

		localStorage.setItem(
			"user",
			JSON.stringify({ token: res.token, photoUrl: res.user.url })
		);
		setUserPhoto(res.user.url);
		setToken(res.token);
		setConfig({
			headers: {
				Authorization: `Bearer ${res.token}`,
			},
		});
		navigate("/home");
	} catch (err) {
		console.log(err);
		if (err.code === "ERR_NETWORK") {
			setAlert({ message: "Erro de Conexão", show: true });
		}
		if (err.response.status === 401) {
			setAlert({ message: "Usuário ou senha inválida", show: true });
		}
	}
}
