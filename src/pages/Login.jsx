import {
	CentralizerContainer,
	Shadow,
	PseudoShadow,
	ElementsContainer,
	StyledLink,
} from "../styled/CommonStyles";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Login() {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	return (
		<CentralizerContainer>
			<Logo />
			<Shadow width={"450px"} height={"390px"}>
				<PseudoShadow>
					<ElementsContainer>
						<form autoComplete="on">
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
