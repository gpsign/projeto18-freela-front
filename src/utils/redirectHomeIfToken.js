export function redirectHomeIfToken(AuthInfo, navigate) {
	const { token } = AuthInfo;
	if (token !== "null") {
		navigate("/home");
	}
}
