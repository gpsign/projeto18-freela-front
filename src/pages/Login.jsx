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
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import styled from "styled-components";
import { Alert } from "../components/Alert.jsx";

export default function Login() {
	const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
	const { token, setToken, setConfig, setShowAlert, showAlert } =
		useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		redirectHomeIfToken(token, navigate);
	}, []);

	return (
		<>
			{showAlert.show && <Alert />}
			<CentralizerContainer>
				<ElementsContainer width={"450px"} height={"510px"} margin={"200px"}>
					<h2>LOGIN</h2>
					<form
						autoComplete='on'
						onSubmit={async (e) => {
							e.preventDefault();
							await submitLogin(
								loginInputs,
								setToken,
								setConfig,
								setShowAlert,
								navigate
							);
						}}
					>
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
				</ElementsContainer>
			</CentralizerContainer>
		</>
	);
}

const LockIco = styled(HiOutlineLockClosed)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

const MailIco = styled(HiOutlineMail)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;
const InputContainer = styled.div`
	width: 100%;
	position: relative;
`;
