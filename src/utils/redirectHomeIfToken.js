export function redirectHomeIfToken(useEffect, token, navigate) {
	useEffect(() => {
		if (token !== "null") {
			navigate("/home");
		}
	}, [navigate, token]);
}
