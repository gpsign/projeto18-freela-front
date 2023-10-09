import { useState, useEffect, useContext } from "react";
import { UserCatCard } from "./UserCatCard.jsx";
import { getUserCatsList } from "../utils/getUserCatsList.js";
import { AuthContext } from "../context/authentication.jsx";

export function UserCatsList() {
	const AuthInfo = useContext(AuthContext);
	const [userCats, setUserCats] = useState([]);

	useEffect(() => {
		getUserCatsList(setUserCats, AuthInfo);
	}, []);

	return userCats.map((cat) => {
		return <UserCatCard cat={cat} />;
	});
}
