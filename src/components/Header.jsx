import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useContext } from "react";
import { LoginDataContext } from "../context/login";

export default function Header() {
	const navigate = useNavigate();

	return (
		<Position>
			<Shadow width={"100vw"} height={"80px"}>
				<PseudoShadow>
					<ElementsContainer>
						<HeaderContent>
							<h1>Ultimate Fashion Cats</h1>
							<h2
								onClick={() => {
									navigate("/profile");
								}}
							>
								PERFIL
							</h2>
						</HeaderContent>
					</ElementsContainer>
				</PseudoShadow>
			</Shadow>
		</Position>
	);
}

const Position = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

const HeaderContent = styled.div`
	width: 100%;
	height: 100px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-left: 35px;
	padding-right: 35px;

	background-color: #9b6162;

	h1 {
		font-family: "Motley";
		font-size: 40px !important;

		color: #fcf6e3;
	}

	h2 {
		font-size: 32px;
		color: #fcf6e3;
	}
`;

const ElementsContainer = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	top: -4px;
	left: 0px;
	z-index: 3;

	display: flex;
	flex-direction: column;

	background-color: #9b6162;

	font-family: "ShiftyNotes";

	overflow-y: scroll;
`;

const PseudoShadow = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	top: -6px;
	left: 0px;
	z-index: 2;

	background-color: #fcf6e3;
`;

const Shadow = styled.div`
	width: 100vw;
	height: 80px;

	position: relative;
	z-index: 4;

	background-color: #dbc1ac;

	margin-bottom: 30px;
`;
