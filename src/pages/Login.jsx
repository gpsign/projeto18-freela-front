import CentralizerContainer from "../styled/CentralizerContainer";
import { Shadow, PseudoShadow, InputBox, StyledLink } from "../styled/InputBox";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	return (
		<CentralizerContainer>
			<h1>Ultimate Fashion Cats</h1>
			<Shadow width={"450"} heigth={"390"}>
				<PseudoShadow>
					<InputBox>
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
					</InputBox>
				</PseudoShadow>
			</Shadow>
		</CentralizerContainer>
	);
}
