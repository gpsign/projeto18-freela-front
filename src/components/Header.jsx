import { useNavigate } from "react-router-dom";
import {
	HeaderContent,
	HeaderPosition,
	Arrow,
	Logo,
	Profile,
	ProfilePic,
} from "../styled/Header.js";
import { ProfileOptions } from "./ProfileOptions.jsx";
import { useContext } from "react";
import DefaultPic from "/images/Default.jpg";
import { DataContext } from "../context/index.js";

export function Header() {
	const navigate = useNavigate();
	const { userPhoto, isOptionsExpanded, setIsOptionsExpanded } =
		useContext(DataContext);

	return (
		<HeaderPosition>
			<HeaderContent>
				<Logo onClick={() => navigate("/home")}>Fashion Cats</Logo>
				<Profile
					onClick={() => {
						setIsOptionsExpanded(!isOptionsExpanded);
					}}
				>
					<ProfilePic src={userPhoto ? userPhoto : DefaultPic} />
					<Arrow $expanded={isOptionsExpanded.toString()} />
				</Profile>
				<ProfileOptions />
			</HeaderContent>
		</HeaderPosition>
	);
}
