import { useState, createContext } from "react";
import { getUserLocalStorage } from "../utils/index.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const loginLs = getUserLocalStorage();
	const [token, setToken] = useState(loginLs.token);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${loginLs.token}`,
		},
	});

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				loginLs,
				config,
				setConfig,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
