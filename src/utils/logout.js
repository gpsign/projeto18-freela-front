export function logout(setConfig, setToken, navigate) {
	localStorage.setItem("token", "null");
	setConfig({});
	setToken("null");
	navigate("/");
}
