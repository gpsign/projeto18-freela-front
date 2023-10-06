import { useState, createContext } from "react";
import { getUserLocalStorage } from "../utils/index.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const userLs = getUserLocalStorage();
	const [token, setToken] = useState(userLs.token);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${userLs.token}`,
		},
	});

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				userLs,
				config,
				setConfig,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
