export function formatarTelefone(value) {
	if (value.length > 15) return value.substring(0, 15);

	return value
		.replace(/\D/g, "")
		.replace(/(\d{2})(\d)/, "($1) $2")
		.replace(/(\d)(\d{4})$/, "$1-$2");
}
