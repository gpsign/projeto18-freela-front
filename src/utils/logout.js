export function logout(DataInfo, AuthInfo, navigate) {
	const { setConfig, setToken } = AuthInfo;
	const { setCatPage } = DataInfo;

	localStorage.setItem(
		"user",
		JSON.stringify({ token: "null", photoUrl: null })
	);

	setCatPage(undefined);
	setConfig({});
	setToken("null");
	navigate("/");
}
