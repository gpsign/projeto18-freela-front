import { useState, createContext } from "react";
import { getUserLocalStorage } from "../utils/index.js";

export const DefaultAlert = {
	show: false,
	message: "",
	onConfirm: "",
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const loginLs = getUserLocalStorage();
	const [alert, setAlert] = useState(DefaultAlert);
	const [user, setUser] = useState(loginLs.user);
	const [userPhoto, setUserPhoto] = useState(loginLs.user.url);
	const [showNewCat, setShowNewCat] = useState(false);
	const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
	const [filter, setFilter] = useState("name");
	const [catsList, setCatsList] = useState([]);
	const [tagsList, setTagsList] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [catPage, setCatPage] = useState();
	const [showEditPhoto, setShowEditPhoto] = useState(true);

	return (
		<DataContext.Provider
			value={{
				setShowNewCat,
				showNewCat,
				alert,
				setAlert,
				isOptionsExpanded,
				setIsOptionsExpanded,
				filter,
				setFilter,
				catsList,
				setCatsList,
				tagsList,
				setTagsList,
				searchValue,
				setSearchValue,
				catPage,
				setCatPage,
				user,
				setUser,
				userPhoto,
				setUserPhoto,
				showEditPhoto,
				setShowEditPhoto,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
