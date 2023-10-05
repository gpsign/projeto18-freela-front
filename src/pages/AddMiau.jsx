<ScreenDarknessContainer show={showAddCat}>
	{showAddCat === "true" && (
		<ElementsContainer>
			<h2>Adicionar seu Miau</h2>

			
		</ElementsContainer>
	)}
</ScreenDarknessContainer>;

const AddMiauButton = styled.button`
	width: 240px;
	height: 80px;

	position: fixed;
	bottom: 5%;
	right: 3%;

	border-radius: 80px;
	background-color: #a2dbbc;

	outline: none;
	border: none;

	overflow-x: hidden;

	cursor: pointer;

	transition: all 0.5s ease-out;

	filter: brightness(1.1);

	div {
		position: relative;
	}

	p {
		font-family: "AustieBost";
		font-size: 64px;

		white-space: nowrap;

		position: absolute;
		bottom: -38px;
		right: 23px;
	}

	&:not(:hover) {
		width: 80px;
		filter: brightness(1);
	}

	&:active {
		transform: scale(0.9);
	}
`;

const ScreenDarknessContainer = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	display: ${({ show }) => (show === "true" ? "flex;" : "flex;")};
	justify-content: center;
	align-items: center;

	background-color: ${({ show }) =>
		show === "true" ? "rgba(0, 0, 0, 0.6);" : "rgba(0, 0, 0, 0);"};

	pointer-events: ${({ show }) => (show === "true" ? "auto;" : "none;")};

	transition: all 0.2s ease-out;
`;
