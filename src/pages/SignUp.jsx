import {
	CentralizerContainer,
	ElementsContainer,
	StyledLink,
} from "../styled/CommonStyles";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDataContext } from "../context/login";
import { redirectHomeIfToken, submitSignup } from "../utils/index.js";

export default function SignUp() {
	const [signupData, setSignupData] = useState({
		name: "",
		number: "",
		cpf: "",
		password: "",
		confirmPassword: "",
	});

	const navigate = useNavigate();
	const { token } = useContext(LoginDataContext);

	//redirectHomeIfToken(useEffect, token, navigate);

	return (
		<CentralizerContainer>
			<ElementsContainer width={"450px"}>
				<h2>SIGN-UP</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						submitSignup(signupData, navigate);
					}}
				>
					<input
						placeholder='Nome completo'
						type='text'
						autoComplete='name'
						onChange={(e) =>
							setSignupData({ ...signupData, name: e.target.value })
						}
						required
					/>
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
					<input
						placeholder='CPF'
						type='text'
						autoComplete='off'
						value={formatarCPF(signupData.cpf)}
						onChange={(e) =>
							setSignupData({ ...signupData, cpf: formatarCPF(e.target.value) })
						}
						required
					/>
					<input
						placeholder='E-mail'
						type='email'
						autoComplete='email'
						onChange={(e) =>
							setSignupData({ ...signupData, email: e.target.value })
						}
						required
					/>
					<input
						placeholder='Senha'
						type='password'
						autoComplete='new-password'
						onChange={(e) =>
							setSignupData({ ...signupData, password: e.target.value })
						}
						required
					/>
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
					<button type='submit'>CADASTRAR</button>
				</form>
				<StyledLink to={"/"}>
					Já possui uma conta? <span className='underline'>Entre agora!</span>
				</StyledLink>
			</ElementsContainer>
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
