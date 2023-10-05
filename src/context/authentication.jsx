import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	let lsToken = localStorage.getItem("token");

	const [token, setToken] = useState(lsToken);
	const [showNewCat, setShowNewCat] = useState(false);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const [showAlert, setShowAlert] = useState({
		show: false,
		message: "",
	});

	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				lsToken,
				config,
				setConfig,
				setShowNewCat,
				showNewCat,
				showAlert,
				setShowAlert,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
