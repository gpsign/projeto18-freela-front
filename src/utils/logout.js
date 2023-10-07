export function logout(DataInfo, AuthInfo, navigate) {
	const { setConfig, setToken } = AuthInfo;
	const { setCatPage, setAlert, setIsOptionsExpanded } = DataInfo;

	localStorage.removeItem("login");

	setIsOptionsExpanded(false);
	setAlert({ show: false, message: "", onConfirm: "" });
	setCatPage(undefined);
	setConfig({});
	setToken("null");
	navigate("/");
}
