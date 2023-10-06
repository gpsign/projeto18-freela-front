import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { ProfileOptions } from "./ProfileOptions.jsx";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authentication.jsx";
import DefaultPic from "/images/Default.jpg";

export function Header() {
	const navigate = useNavigate();
	const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
	const { userPhoto } = useContext(AuthContext);

	return (
		<Position>
			<HeaderContent>
				<Logo>Fashion Cats</Logo>
				<Profile
					onClick={() => {
						setIsOptionsExpanded(!isOptionsExpanded);
					}}
				>
					<ProfilePic src={userPhoto ? userPhoto : DefaultPic} />
					<Arrow $expanded={isOptionsExpanded.toString()} />
				</Profile>
				<ProfileOptions
					$expanded={isOptionsExpanded.toString()}
					set={setIsOptionsExpanded}
				/>
			</HeaderContent>
		</Position>
	);
}

const Position = styled.div`
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 5;
`;

const HeaderContent = styled.div`
	width: 100%;
	height: 50px;

	position: relative;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0px 40px 0px 40px;

	background: rgb(41, 41, 41);
	background: radial-gradient(
		circle,
		rgba(41, 41, 41, 1) 0%,
		rgba(32, 31, 32, 1) 100%
	);
`;

const Logo = styled.h1`
	font-family: "ProximaNovaBold";
	font-size: 28px !important;

	color: #ffffff;
`;

const Profile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: fit-content;
	height: 40px;

	padding: 0px 20px 0px 20px;

	&:hover {
		cursor: pointer;
	}
`;

const ProfilePic = styled.img`
	height: 40px;
	width: 40px;
	object-fit: cover;
	border-radius: 100%;
	margin-right: 10px;
`;

const Arrow = styled(IoIosArrowDown)`
	color: white;
	font-size: 24px;

	transform: rotate(
		${({ $expanded }) => ($expanded === "true" ? "-180deg" : "0deg")}
	);
	transition: all 0.3s;
`;
