import { useState, createContext } from "react";

export const LoginDataContext = createContext();

export const LoginDataProvider = ({ children }) => {
	let storage = localStorage.getItem("user");
	let lsToken = { token: "null", id: null };

	if (storage === null) {
		storage = { token: "null", id: null };
	} else lsToken = JSON.parse(storage).token;

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
