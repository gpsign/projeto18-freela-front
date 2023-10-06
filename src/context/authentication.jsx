import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	let userLs = localStorage.getItem("user");
	if (userLs === null) {
		userLs = {
			token: "",
			photoUrl: null,
		};
	} else userLs = JSON.parse(userLs);

	const [token, setToken] = useState(userLs.token);
	const [showNewCat, setShowNewCat] = useState(false);
	const [config, setConfig] = useState({
		headers: {
			Authorization: `Bearer ${userLs.token}`,
		},
	});
	const [showAlert, setShowAlert] = useState({
		show: false,
		message: "",
		onConfirm: undefined,
	});
	const [userPhoto, setUserPhoto] = useState(userLs.photoUrl);

	// useEffect(() => {
	// 	setToken(userLs.token);
	// }, []);

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				userLs,
				config,
				setConfig,
				setShowNewCat,
				showNewCat,
				showAlert,
				setShowAlert,
				userPhoto,
				setUserPhoto,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
