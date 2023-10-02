export function redirectLoginIfNull(useEffect, token, navigate) {
	useEffect(() => {
		if (token === "null") {
			navigate("/");
		}
	}, [token]);
}
