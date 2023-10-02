<ScreenDarknessContainer show={showAddCat}>
	{showAddCat === "true" && (
		<ElementsContainer>
			<h2>Adicionar seu Miau</h2>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitMiau();
				}}
			>
				<input
					placeholder='Nome do Miau'
					onChange={(e) => {
						setNewCat({ ...newCat, name: e.target.value });
					}}
					required
				/>
				<input
					placeholder='URL da foto do modelo'
					onChange={(e) => {
						setNewCat({ ...newCat, url: e.target.value });
					}}
					required
				/>
				<textarea
					placeholder='Tags (Separe por vírgulas!)'
					onChange={(e) => {
						setNewCat({ ...newCat, tags: e.target.value });
					}}
				/>
				<textarea
					placeholder='Descrição do Miau'
					onChange={(e) => {
						setNewCat({ ...newCat, description: e.target.value });
					}}
				/>
				<div className='buttonContainer'>
					<button type='submit'>Adicionar!</button>
					<button
						className='Close'
						onClick={() => {
							setShowAddCat("false");
						}}
					>
						<p>X</p>
					</button>
				</div>
			</form>
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
