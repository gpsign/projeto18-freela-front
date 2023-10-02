import axios from "axios";

export async function submitLogin(loginInputs, setToken, setConfig) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	try {
		const loginRes = await axios.post(`${VITE_API_URL}/sign-in`, loginInputs);
		const newToken = loginRes.data.token;

		localStorage.setItem("token", newToken);
		setToken(newToken);
		setConfig({
			headers: {
				Authorization: `Bearer ${newToken}`,
			},
		});
	} catch (err) {
		console.log(err);
		if (err.response.status == 401) alert("Usuário ou senha inválida");
	}
}
