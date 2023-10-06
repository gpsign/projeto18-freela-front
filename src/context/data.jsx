import { useState, createContext } from "react";
import { getUserLocalStorage } from "../utils/index.js";

export const DefaultAlert = {
	show: false,
	message: "",
	onConfirm: "",
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const userLs = getUserLocalStorage();
	const [alert, setAlert] = useState(DefaultAlert);
	const [userPhoto, setUserPhoto] = useState(userLs.photoUrl);
	const [showNewCat, setShowNewCat] = useState(false);
	const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
	const [filter, setFilter] = useState("name");
	const [catsList, setCatsList] = useState([]);
	const [tagsList, setTagsList] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	return (
		<DataContext.Provider
			value={{
				setShowNewCat,
				showNewCat,
				alert,
				setAlert,
				userPhoto,
				setUserPhoto,
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
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
