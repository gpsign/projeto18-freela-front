import {
	CentralizerContainer,
	ElementsContainer,
	StyledLink,
} from "../styled/CommonStyles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitLogin, redirectHomeIfToken } from "../utils/index.js";
import { AuthContext } from "../context/authentication.jsx";
import { useEffect } from "react";

export default function Login() {
	const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
	const { token, setToken, setConfig } = useContext(AuthContext);
	const navigate = useNavigate();

	redirectHomeIfToken(useEffect, token, navigate);

	return (
		<CentralizerContainer>
			<ElementsContainer width={"450px"} height={"550px"}>
				<h2>LOGIN</h2>
				<form
					autoComplete='on'
					onSubmit={async (e) => {
						e.preventDefault();
						await submitLogin(loginInputs, setToken, setConfig);
						navigate("/home");
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
