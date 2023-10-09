import axios from "axios";
import DefaultPhoto from "/images/Default.jpg";

export async function submitLogin(loginInputs, DataInfo, AuthInfo, navigate) {
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const { setAlert, setUser, setUserPhoto } = DataInfo;
	const { setConfig, setToken } = AuthInfo;

	try {
		const res = await axios.post(`${VITE_API_URL}/sign-in`, loginInputs);
		console.log(res);
		const loginRes = res.data;
		const token = loginRes.token;
		const photo = loginRes.user.url ? loginRes.user.url : DefaultPhoto;
		const user = {
			...loginRes.user,
			url: photo,
		};

		const local = {
			token,
			user,
		};

		localStorage.setItem("login", JSON.stringify(local));

		setUserPhoto(photo);
		setUser(user);
		setToken(token);
		setConfig({
			headers: {
				Authorization: `Bearer ${token}`,
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
