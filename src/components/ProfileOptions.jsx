import { OptionsWindow, Option } from "../styled/ProfileOptions.js";
import { PlusIco, LogOutIco, UserIco } from "../styled/Icons.js";
import { logout } from "../utils/logout.js";
import { AuthContext, DataContext } from "../context/index.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function ProfileOptions() {
	const navigate = useNavigate();
	const AuthInfo = useContext(AuthContext);
	const DataInfo = useContext(DataContext);
	const { setShowNewCat, isOptionsExpanded, setIsOptionsExpanded } = DataInfo;

	return (
		<OptionsWindow $expanded={isOptionsExpanded.toString()}>
			<Option
				onClick={() => {
					setShowNewCat(true);
					setIsOptionsExpanded(false);
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
					logout(AuthInfo, navigate);
				}}
			>
				<LogOutIco />
				Sair
			</Option>
		</OptionsWindow>
	);
}
