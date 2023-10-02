export function redirectLoginIfNull(token, navigate) {
	if (token === "null") {
		navigate("/");
	}
}
