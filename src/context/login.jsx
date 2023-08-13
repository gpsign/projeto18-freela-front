import { useState, createContext } from "react";

export const LoginDataContext = createContext();

export const LoginDataProvider = ({ children }) => {
	const lsToken = localStorage.getItem("token");
	const [token, setToken] = useState(lsToken);

	return (
		<LoginDataContext.Provider value={{ token, setToken, lsToken }}>
			{children}
		</LoginDataContext.Provider>
	);
};
