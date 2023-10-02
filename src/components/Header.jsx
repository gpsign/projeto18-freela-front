import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Header() {
	const navigate = useNavigate();

	return (
		<Position>
			<HeaderContent>
				<h1>Fashion Cats</h1>
				<h2
					onClick={() => {
						navigate("/profile");
					}}
				>
					PERFIL
				</h2>
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

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-left: 35px;
	padding-right: 35px;

	background: rgb(41, 41, 41);
	background: radial-gradient(
		circle,
		rgba(41, 41, 41, 1) 0%,
		rgba(32, 31, 32, 1) 100%
	);

	h1 {
		font-family: "ProximaNovaBold";
		font-size: 40px !important;

		color: #ffffff;
	}

	h2 {
		font-family: "ProximaNovaMedium";
		font-size: 32px;
		color: #ffffff;
	}
`;
