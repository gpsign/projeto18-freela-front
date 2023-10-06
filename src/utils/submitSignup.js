import axios from "axios";

export async function submitSignup(signupData, DataInfo, navigate) {
	const compare = { ...signupData };
	delete signupData.confirmPassword;
	const { password, confirmPassword } = compare;
	const { setAlert } = DataInfo;
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	try {
		if (password != confirmPassword) {
			throw { code: "PASSWORD_MATCH" };
		}

		await axios.post(`${VITE_API_URL}/sign-up`, signupData);
		navigate("/");
	} catch (err) {
		console.log(err);
		if (err.code === "PASSWORD_MATCH") {
			setAlert({ message: "As senhas não coincidem", show: true });
		}
		if (err.code === "ERR_NETWORK") {
			setAlert({ message: "Erro de Conexão", show: true });
		}
		if (err.response.status === 409) {
			setAlert({ message: "Email já cadastrado", show: true });
		}
	}
}
