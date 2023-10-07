import DefaultPhoto from "/images/Default.jpg";

export function getUserLocalStorage() {
	let loginLs = localStorage.getItem("login");
	if (loginLs === null) {
		loginLs = {
			token: "null",
			user: {
				id: null,
				name: "",
				email: "",
				phone: "",
				cpf: "",
				url: DefaultPhoto,
			},
		};
	} else loginLs = JSON.parse(loginLs);
	return loginLs;
}
