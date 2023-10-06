export function getUserLocalStorage() {
	let userLs = localStorage.getItem("user");
	if (userLs === null) {
		userLs = {
			token: "",
			photoUrl: null,
		};
	} else userLs = JSON.parse(userLs);
	return userLs;
}
