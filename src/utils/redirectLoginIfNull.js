export function redirectLoginIfNull(AuthInfo, navigate) {
	const { token } = AuthInfo;
	if (token === "null") {
		navigate("/");
	}
}
