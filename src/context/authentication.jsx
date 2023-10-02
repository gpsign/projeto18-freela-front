import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	let lsToken = localStorage.getItem("token");

	const [token, setToken] = useState(lsToken);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	return (
		<AuthContext.Provider
			value={{ token, setToken, lsToken, config, setConfig }}
		>
			{children}
		</AuthContext.Provider>
	);
};
