export function logout(DataInfo, AuthInfo, navigate) {
	const { setConfig, setToken } = AuthInfo;
	const { setCatPage, setAlert } = DataInfo;

	localStorage.setItem(
		"user",
		JSON.stringify({ token: "null", photoUrl: null })
	);

	setAlert({ show: false, message: "", onConfirm: "" });
	setCatPage(undefined);
	setConfig({});
	setToken("null");
	navigate("/");
}
