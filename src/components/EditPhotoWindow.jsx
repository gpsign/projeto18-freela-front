import { useContext } from "react";
import { Behind } from "../styled/CommonStyles.js";
import { AuthContext, DataContext, DefaultAlert } from "../context/index.js";
import styled from "styled-components";

export function EditPhotoWindow() {
	const AuthInfo = useContext(AuthContext);
	const DataInfo = useContext(DataContext);
	const { setShowEditPhoto, showEditPhoto, user } = DataInfo;
	return (
		<>
			{showEditPhoto && (
				<Behind>
					<WindowContainer>
						<h1>Nova Foto</h1>
						<img src={user.url} />
						<input placeholder='Cole a URL aqui' />

						<div style={{ display: "flex" }}>
							<button className='confirm'>ENVIAR</button>
							<button
								className='cancel'
								onClick={() => setShowEditPhoto(false)}
							>
								CANCELAR
							</button>
						</div>
					</WindowContainer>
				</Behind>
			)}
		</>
	);
}

export const WindowContainer = styled.div`
	width: 350px;
	height: 500px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	margin: auto;

	border-radius: 3px;

	padding: 20px;

	filter: drop-shadow(0px 5px 5px gray);

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	font-family: "ProximaNovaBold";

	img {
		width: 250px;
		height: 250px;
		object-fit: cover;
		border-radius: 14px;
		filter: drop-shadow(0px 5px 5px gray);
	}

	h1 {
		font-size: 42px;
		color: black;
		text-align: center;
		margin-bottom: 10px;

		filter: drop-shadow(0px 0px 5px gray);
	}

	.confirm {
		background-image: linear-gradient(to right, #a6eca8, #a6ecb8);
	}

	.cancel {
		background-image: linear-gradient(to right, #ffb7b7, #ffb5b5);
	}

	button {
		height: 50px;
		width: fit-content;

		padding-left: 10px;

		padding-right: 10px;

		margin: 0px 10px 0px 10px;

		border-radius: 4px;
		border: none;

		font-size: 20px;
		font-family: "ProximaNovaBold";

		filter: drop-shadow(0px 2px 4px lightgray);

		transition: filter 0.5s, transform 0.1s ease-out;

		&:hover {
			filter: brightness(0.97) drop-shadow(0px 2px 4px lightgray);
			transition: filter 0.3s;

			cursor: pointer;
		}

		&:active {
			transform: translateY(1px);
			transition: transform 0.1s ease-out;
		}
	}

	input {
		width: 250px;
		height: 60px;

		text-align: center;

		border: none;
		border-radius: 8px;
		outline: none;

		background-image: linear-gradient(to bottom right, #ecf0f6, #e6e9ec);

		margin-top: 10px;

		font-size: 22px;

		&::placeholder {
			font-size: 22px;
		}

		font-family: "ProximaNovaBold";
	}
`;
