import styled from "styled-components";
import { BiLogOut, BiSolidUser, BiPlus } from "react-icons/bi";
import { logout } from "../utils/logout.js";
import { AuthContext } from "../context/authentication.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileOptions({ $expanded, set }) {
	const navigate = useNavigate();
	const { setToken, setConfig, setShowNewCat } = useContext(AuthContext);
	return (
		<OptionsWindow $expanded={$expanded}>
			<Option
				onClick={() => {
					setShowNewCat(true);
					set(false);
				}}
			>
				<PlusIco />
				Novo Gato
			</Option>
			<Option>
				<UserIco />
				Meu Perfil
			</Option>
			<Option
				onClick={() => {
					logout(setConfig, setToken, navigate);
				}}
			>
				<LogOutIco />
				Sair
			</Option>
		</OptionsWindow>
	);
}

const PlusIco = styled(BiPlus)`
	font-size: 22px;
	margin-right: 10px;
`;

const UserIco = styled(BiSolidUser)`
	font-size: 22px;
	margin-right: 10px;
`;

const LogOutIco = styled(BiLogOut)`
	font-size: 22px;
	margin-right: 10px;
`;

const Option = styled.li`
	font-family: "ProximaNovaBold";
	font-size: 16px !important;

	display: flex;
	align-items: center;

	padding: 5px;

	color: rgb(80, 80, 80);
	line-height: 30px;

	border-radius: 4px;

	&:hover {
		background: rgb(218, 218, 218);
		background: radial-gradient(
			circle,
			rgba(218, 218, 218, 1) 25%,
			rgba(232, 232, 232, 1) 80%
		);
		cursor: pointer;
	}

	&:active {
		transform: translateY(1px);
	}
`;

const OptionsWindow = styled.ul`
	width: 140px;
	height: fit-content;

	padding: 5px;

	position: absolute;
	top: ${({ $expanded }) => ($expanded === "true" ? "50px" : "-85px")};
	right: 40px;
	z-index: -1;
	filter: drop-shadow(0px 0px 5px gray);

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	border-radius: 0px 0px 4px 4px;

	transition: all 0.3s;
`;
