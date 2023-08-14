import {
	CentralizerContainer,
	Shadow,
	PseudoShadow,
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
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const { token, setToken } = useContext(LoginDataContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (token !== "null") {
			navigate("/home");
		}
	}, []);

	const VITE_API_URL = import.meta.env.VITE_API_URL;

	async function sendLoginInfo() {
		const info = {
			email: email,
			password: senha,
		};

		try {
			const newToken = await axios.post(`${VITE_API_URL}/login`, info);

			localStorage.setItem("user", JSON.stringify(newToken.data));
			setToken(newToken.data.token);

			navigate("/home");
		} catch (err) {
			console.log(err);

			if (err.response.status == 401) alert("Senha inválida");
			else if (err.response.status == 404) alert("Usuário não cadastrado");
		}
	}

	return (
		<CentralizerContainer>
			<Logo />
			<Shadow width={"450px"} height={"390px"}>
				<PseudoShadow>
					<ElementsContainer>
						<form
							autoComplete="on"
							onSubmit={(e) => {
								e.preventDefault();
								sendLoginInfo();
							}}
						>
							<h2>LOGIN</h2>
							<input
								placeholder="E-mail"
								type="email"
								autoComplete="email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<input
								placeholder="Senha"
								type="password"
								autoComplete="current-password"
								onChange={(e) => setSenha(e.target.value)}
								required
							/>
							<button type="submit">ENTRAR</button>
						</form>
						<StyledLink to={"/signup"}>
							Não tem uma conta? <span className="underline">Cadastre-se!</span>
						</StyledLink>
					</ElementsContainer>
				</PseudoShadow>
			</Shadow>
		</CentralizerContainer>
	);
}
