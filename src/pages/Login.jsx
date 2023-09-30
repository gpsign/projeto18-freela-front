import {
	CentralizerContainer,
	ElementsContainer,
	StyledLink,
} from "../styled/CommonStyles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import { LoginDataContext } from "../context/login";
import { useEffect } from "react";

export default function Login() {
	const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

	const { token, setToken, setConfig } = useContext(LoginDataContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (token !== "null") {
			navigate("/home");
		}
	}, [navigate, token]);

	const VITE_API_URL = import.meta.env.VITE_API_URL;

	async function sendLoginInfo() {
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

			navigate("/home");
		} catch (err) {
			console.log(err);
			if (err.response.status == 401) alert("Usuário ou senha inválida");
		}
	}

	return (
		<CentralizerContainer>
			<ElementsContainer>
			<h2>LOGIN</h2>
				<form
					autoComplete='on'
					onSubmit={(e) => {
						e.preventDefault();
						sendLoginInfo();
					}}
				>
					<input
						placeholder='E-mail'
						type='email'
						autoComplete='email'
						onChange={(e) =>
							setLoginInputs({ ...loginInputs, email: e.target.value })
						}
						required
					/>
					<input
						placeholder='Senha'
						type='password'
						autoComplete='current-password'
						onChange={(e) =>
							setLoginInputs({ ...loginInputs, password: e.target.value })
						}
						required
					/>
					<button type='submit'>ENTRAR</button>
				</form>
				<StyledLink to={"/signup"}>
					Não tem uma conta? <span className='underline'>Cadastre-se!</span>
				</StyledLink>
			</ElementsContainer>
		</CentralizerContainer>
	);
}
