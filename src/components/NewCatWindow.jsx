import {
	ButtonsContainer,
	CatContent,
	LeftBox,
	RightBox,
	TagContainer,
	WindowContainer,
} from "../styled/NewCatWindow.js";
import { Behind } from "../styled/CommonStyles.js";
import { submitNewCat, isValidImage, getAllCatsList } from "../utils/index.js";
import DefaultPic from "/images/Default.jpg";
import { useContext, useState } from "react";
import { AuthContext, DataContext } from "../context/index.js";
import { StringToTags } from "./StringToTags.jsx";

const DefaultNewCat = {
	name: "",
	url: "",
	description: "",
	tags: "",
};

export function NewCatWindow() {
	const [newCat, setNewCat] = useState(DefaultNewCat);
	const AuthInfo = useContext(AuthContext);
	const DataInfo = useContext(DataContext);
	const { showNewCat, setShowNewCat, setShowAlert } = DataInfo;

	return (
		<>
			{showNewCat && (
				<Behind>
					<WindowContainer>
						<form
							onSubmit={async (e) => {
								e.preventDefault();
								const success = await submitNewCat(newCat, AuthInfo);
								if (success) {
									setNewCat(DefaultNewCat);
									setShowNewCat(false);
									getAllCatsList(DataInfo, AuthInfo);
								} else {
									setShowAlert({ show: true, message: "Erro ao enviar" });
								}
							}}
						>
							<CatContent>
								<LeftBox>
									<img src={newCat.url !== "" ? newCat.url : DefaultPic} />
									<h3>{newCat.name ? newCat.name : "Novo Gato"}</h3>
									<TagContainer>
										<StringToTags text={newCat.tags} small={"false"} />
									</TagContainer>
								</LeftBox>
								<RightBox>
									<input
										placeholder='Nome do Gato'
										onChange={(e) => {
											setNewCat({ ...newCat, name: e.target.value });
										}}
										value={newCat.name}
										required
									/>
									<input
										placeholder='URL da Imagem'
										onChange={(e) => {
											if (isValidImage(e.target.value)) {
												setNewCat({ ...newCat, url: e.target.value });
											} else setNewCat({ ...newCat, url: "" });
										}}
										value={newCat.url}
										required
									/>
									<textarea
										placeholder='Descrição'
										onChange={(e) => {
											setNewCat({ ...newCat, description: e.target.value });
										}}
									/>
									<textarea
										placeholder='Tags (Separe por vírgulas!)'
										onChange={(e) => {
											setNewCat({ ...newCat, tags: e.target.value });
										}}
									/>
									<ButtonsContainer>
										<button className='confirm' type='submit'>
											ENVIAR
										</button>
										<button
											type='button'
											className='cancel'
											onClick={() => {
												setShowNewCat(false);
											}}
										>
											CANCELAR
										</button>
									</ButtonsContainer>
								</RightBox>
							</CatContent>
						</form>
					</WindowContainer>
				</Behind>
			)}
		</>
	);
}
