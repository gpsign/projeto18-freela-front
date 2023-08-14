import { useState, createContext } from "react";

export const LoginDataContext = createContext();

export const LoginDataProvider = ({ children }) => {
	let lsToken = JSON.parse(localStorage.getItem("user")).token;

	const [token, setToken] = useState(lsToken);
	const [userId, setUserId] = useState(
		JSON.parse(localStorage.getItem("user")).id
	);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return (
		<LoginDataContext.Provider
			value={{ token, setToken, lsToken, config, setConfig, userId }}
		>
			{children}
		</LoginDataContext.Provider>
	);
};
