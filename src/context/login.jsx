import { useState, createContext } from "react";

export const LoginDataContext = createContext();

export const LoginDataProvider = ({ children }) => {
	let storage = localStorage.getItem("user");
	let lsToken = { token: "null", id: null };

	if (storage === null) {
		storage = JSON.stringify({ token: "null", id: null });
	} else lsToken = JSON.parse(storage).token;

	console.log(storage);

	const [token, setToken] = useState(lsToken);
	const [userId, setUserId] = useState(JSON.parse(storage).id);
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
