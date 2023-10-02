import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { ProfileOptions } from "./ProfileOptions.jsx";
import { useState } from "react";

export function Header() {
	const navigate = useNavigate();
	const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

	return (
		<Position>
			<HeaderContent>
				<Logo>Fashion Cats</Logo>
				<Profile
					onClick={() => {
						setIsOptionsExpanded(!isOptionsExpanded);
					}}
				>
					<ProfilePic src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSQAu_WEwlZdCo_qoDpOSzMB-hXMklczWCoAEj37cwudY7Qcqi_bxjt6gyGb9D48sa9zLsXnkFM-gQkvq-BmRA' />
					<Arrow expanded={isOptionsExpanded.toString()} />
				</Profile>
				<ProfileOptions expanded={isOptionsExpanded.toString()} />
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
	height: 70px;

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
	font-size: 40px !important;

	color: #ffffff;
`;

const Profile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: fit-content;
	height: 50px;

	padding: 0px 20px 0px 20px;

	&:hover {
		cursor: pointer;
	}
`;

const ProfilePic = styled.img`
	height: 50px;
	width: 50px;
	object-fit: cover;
	border-radius: 100%;
	margin-right: 10px;
`;

const Arrow = styled(IoIosArrowDown)`
	color: white;
	font-size: 24px;

	transform: rotate(
		${({ expanded }) => (expanded === "true" ? "-180deg" : "0deg")}
	);
	transition: all 0.3s;
`;
