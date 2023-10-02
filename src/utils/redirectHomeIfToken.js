export function redirectHomeIfToken(token, navigate) {
	if (token !== "null") {
		navigate("/home");
	}
}
