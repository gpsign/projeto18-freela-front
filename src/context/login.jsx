import { useState, createContext, useEffect } from "react";

export const LoginDataContext = createContext();

export const LoginDataProvider = ({ children }) => {
	let lsToken = localStorage.getItem("token");

	const [token, setToken] = useState(lsToken);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	console.log(token);

	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	return (
		<LoginDataContext.Provider
			value={{ token, setToken, lsToken, config, setConfig }}
		>
			{children}
		</LoginDataContext.Provider>
	);
};
