import { useContext } from "react";
import { Behind } from "../styled/CommonStyles.js";
import { AlertContainer, Message } from "../styled/Alert.js";
import { AuthContext, DataContext, DefaultAlert } from "../context/index.js";
import { logout } from "../utils/logout.js";
import { useNavigate } from "react-router-dom";

export function Alert() {
	const AuthInfo = useContext(AuthContext);
	const DataInfo = useContext(DataContext);
	const { setAlert, alert } = useContext(DataContext);
	const navigate = useNavigate();

	return (
		<>
			{alert.show && (
				<Behind>
					<AlertContainer>
						<h2>ERRO</h2>
						<Message>
							{alert.message ? alert.message : "Erro desconhecido"}
						</Message>
						<button
							onClick={() => {
								if (alert.onConfirm === "logout") {
									logout(DataInfo, AuthInfo, navigate);
								}
								setAlert(DefaultAlert);
							}}
						>
							OK
						</button>
					</AlertContainer>
				</Behind>
			)}
		</>
	);
}
