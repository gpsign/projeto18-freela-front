import axios from "axios";

export async function submitSignup(signupData, navigate) {
	const { password, confirmPassword } = signupData;
	if (password != confirmPassword) {
		alert("As senhas estão diferentes");
		return;
	} else delete signupData.confirmPassword;

	const VITE_API_URL = import.meta.env.VITE_API_URL;

	try {
		console.log(signupData);

		await axios.post(`${VITE_API_URL}/sign-up`, signupData);
		navigate("/");
	} catch (err) {
		console.log(err);
		if (err.response.status == 409) alert("Usuário já cadastrado");
		else alert("Erro");
	}
}
