import {
	CentralizerContainer,
	Shadow,
	PseudoShadow,
	ElementsContainer,
	StyledLink
} from "../styled/CommonStyles";
import { useState } from "react";

export default function SignUp() {
	const [nome, setNome] = useState("");
	const [telefone, setTelefone] = useState("");
	const [CPF, setCPF] = useState("");
	const [email, setEmail] = useState("");
	const [senhaNova, setSenhaNova] = useState("");
	const [confirmaSenha, setConfirmaSenha] = useState("");

	return (
		<CentralizerContainer>
			<h1>Ultimate Fashion Cats</h1>
			<Shadow width={"450px"} height={"550px"}>
				<PseudoShadow>
					<ElementsContainer>
						<form>
							<h2>CADASTRO</h2>
							<input
								placeholder="Nome completo"
								type="text"
								autoComplete="name"
								onChange={(e) => setNome(e.target.value)}
								required
							/>
							<input
								placeholder="Telefone"
								type="text"
								autoComplete="tel"
								value={formatarTelefone(telefone)}
								onChange={(e) => setTelefone(e.target.value)}
								required
							/>
							<input
								placeholder="CPF"
								type="text"
								autoComplete="off"
								value={formatarCPF(CPF)}
								onChange={(e) => setCPF(e.target.value)}
								required
							/>
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
								autoComplete="new-password"
								onChange={(e) => setSenhaNova(e.target.value)}
								required
							/>
							<input
								placeholder="Confirme sua senha"
								type="password"
								autoComplete="off"
								onChange={(e) => setConfirmaSenha(e.target.value)}
								required
							/>
							<button type="submit">CADASTRAR</button>
						</form>
						<StyledLink to={"/login"}>
							Já possui uma conta?{" "}
							<span className="underline">Entre agora!</span>
						</StyledLink>
					</ElementsContainer>
				</PseudoShadow>
			</Shadow>
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
	if (!value) return "";
	value = value.replace(/\D/g, "");
	value = value.replace(/(\d{2})(\d)/, "($1) $2");
	value = value.replace(/(\d)(\d{4})$/, "$1-$2");
	return value;
};
