export function logout(AuthInfo, navigate) {
	const { setConfig, setToken } = AuthInfo;

	localStorage.setItem(
		"user",
		JSON.stringify({ token: "null", photoUrl: null })
	);

	setConfig({});
	setToken("null");
	navigate("/");
}
