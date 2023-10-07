import {
	CentralizerContainer,
	FormContainer,
	InputContainer,
	StyledLink,
} from "../styled/CommonStyles";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authentication.jsx";
import { redirectHomeIfToken, submitSignup } from "../utils/index.js";
import { DataContext } from "../context/data.jsx";
import { Alert } from "../components/Alert.jsx";
import {
	CheckLockIco,
	CardIco,
	LockIco,
	MailIco,
	NameIco,
	PhoneIco,
} from "../styled/Icons.js";

const DefaultSignUp = {
	name: "",
	number: "",
	cpf: "",
	password: "",
	confirmPassword: "",
};

export default function SignUp() {
	const [signupData, setSignupData] = useState(DefaultSignUp);
	const AuthInfo = useContext(AuthContext);
	const DataInfo = useContext(DataContext);
	const navigate = useNavigate();

	useEffect(() => {
		redirectHomeIfToken(AuthInfo, navigate);
	}, []);

	return (
		<CentralizerContainer $align={"true"}>
			<Alert />
			<FormContainer>
				<h2>SIGN-UP</h2>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						await submitSignup(signupData, DataInfo, navigate);
					}}
				>
					<InputContainer>
						<NameIco />
						<input
							placeholder='Nome completo'
							type='text'
							autoComplete='name'
							onChange={(e) =>
								setSignupData({ ...signupData, name: e.target.value })
							}
							required
						/>
					</InputContainer>
					<InputContainer>
						<PhoneIco />
						<input
							placeholder='Telefone'
							type='text'
							autoComplete='tel'
							value={formatarTelefone(signupData.number)}
							onChange={(e) =>
								setSignupData({
									...signupData,
									number: formatarTelefone(e.target.value),
								})
							}
							required
						/>
					</InputContainer>
					<InputContainer>
						<CardIco />
						<input
							placeholder='CPF'
							type='text'
							autoComplete='off'
							value={formatarCPF(signupData.cpf)}
							onChange={(e) =>
								setSignupData({
									...signupData,
									cpf: formatarCPF(e.target.value),
								})
							}
							required
						/>
					</InputContainer>
					<InputContainer>
						<MailIco />
						<input
							placeholder='E-mail'
							type='email'
							autoComplete='email'
							onChange={(e) =>
								setSignupData({ ...signupData, email: e.target.value })
							}
							required
						/>
					</InputContainer>
					<InputContainer>
						<LockIco />
						<input
							placeholder='Senha'
							type='password'
							autoComplete='new-password'
							onChange={(e) =>
								setSignupData({ ...signupData, password: e.target.value })
							}
							required
						/>
					</InputContainer>
					<InputContainer>
						<CheckLockIco />
						<input
							placeholder='Confirme sua senha'
							type='password'
							autoComplete='off'
							onChange={(e) =>
								setSignupData({
									...signupData,
									confirmPassword: e.target.value,
								})
							}
							required
						/>
					</InputContainer>
					<button type='submit'>CADASTRAR</button>
				</form>
				<StyledLink to={"/"}>
					Já possui uma conta? <span className='underline'>Entre agora!</span>
				</StyledLink>
			</FormContainer>
		</CentralizerContainer>
	);
}

const formatarCPF = (value) => {
	return value
		.replace(/\D/g, "")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d{1,2})/, "$1-$2")
		.replace(/(-\d{2})\d+?$/, "$1");
};

const formatarTelefone = (value) => {
	if (value.length > 15) return value.substring(0, 15);

	return value
		.replace(/\D/g, "")
		.replace(/(\d{2})(\d)/, "($1) $2")
		.replace(/(\d)(\d{4})$/, "$1-$2");
};
