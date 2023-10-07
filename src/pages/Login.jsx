import {
	CentralizerContainer,
	FormContainer,
	StyledLink,
	InputContainer,
} from "../styled/CommonStyles";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitLogin, redirectHomeIfToken } from "../utils/index.js";
import { AuthContext, DataContext } from "../context/index.js";
import { Alert } from "../components/Alert.jsx";
import { MailIco, LockIco } from "../styled/Icons.js";

export function Login() {
	const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
	const DataInfo = useContext(DataContext);
	const AuthInfo = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		redirectHomeIfToken(AuthInfo, navigate);
	}, []);

	async function submit(e) {
		e.preventDefault();
		await submitLogin(loginInputs, DataInfo, AuthInfo);
		navigate("/home");
	}

	return (
		<>
			<Alert />
			<CentralizerContainer $align={"true"}>
				<FormContainer>
					<h2>LOGIN</h2>
					<form autoComplete='on' onSubmit={async (e) => await submit(e)}>
						<InputContainer>
							<MailIco />
							<input
								placeholder='E-mail'
								type='email'
								autoComplete='email'
								onChange={(e) =>
									setLoginInputs({ ...loginInputs, email: e.target.value })
								}
								required
							/>
						</InputContainer>
						<InputContainer>
							<LockIco />
							<input
								placeholder='Senha'
								type='password'
								autoComplete='current-password'
								onChange={(e) =>
									setLoginInputs({ ...loginInputs, password: e.target.value })
								}
								required
							/>
						</InputContainer>
						<button type='submit'>ENTRAR</button>
					</form>
					<StyledLink to={"/signup"}>
						Não tem uma conta? <span className='underline'>Cadastre-se!</span>
					</StyledLink>
				</FormContainer>
			</CentralizerContainer>
		</>
	);
}
