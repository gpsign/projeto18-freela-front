import {
	Data,
	DataDivision,
	DataLine,
	EditOverlay,
	PhotoContainer,
	UserData,
	UserName,
	UserPhoto,
	UserTitle,
} from "../styled/UserProfileData.js";
import {
	UserCPFIco,
	EditIco,
	ConfirmIco,
	CancelIco,
	SmartPhoneIco,
	UserEmailIco,
	EditPhotoIco,
} from "../styled/Icons.js";
import { formatarTelefone, formatarCPF } from "../utils/index.js";
import { DataContext, AuthContext } from "../context/index.js";
import { useState, useEffect, useContext, useRef } from "react";

export function UserProfileData() {
	const DataInfo = useContext(DataContext);
	const { userPhoto, user, setShowEditPhoto } = DataInfo;

	const AllDisabled = {
		email: true,
		phone: true,
		cpf: true,
	};

	const BeforeChanges = {
		email: user.email,
		phone: user.phone,
		cpf: user.cpf,
	};

	const [values, setValues] = useState(BeforeChanges);
	const [disabled, setDisabled] = useState(AllDisabled);

	const emailInput = useRef(null);
	const phoneInput = useRef(null);
	const cpfInput = useRef(null);

	useEffect(() => {
		if (!disabled.email) emailInput.current.focus();
		if (!disabled.phone) phoneInput.current.focus();
		if (!disabled.cpf) cpfInput.current.focus();
	}, [disabled]);

	return (
		<>
			<UserTitle>
				<PhotoContainer>
					<UserPhoto src={userPhoto} />
					<EditOverlay onClick={() => setShowEditPhoto(true)}>
						<EditPhotoIco />
					</EditOverlay>
				</PhotoContainer>
				<UserName>{user.name}</UserName>
			</UserTitle>
			<UserData>
				<DataDivision />
				<DataLine>
					<UserEmailIco />
					<p>E-mail:</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setDisabled(AllDisabled);
						}}
					>
						<Data
							ref={emailInput}
							value={values.email}
							onChange={(e) => setValues({ ...values, email: e.target.value })}
							type='email'
							required
							disabled={disabled.email}
						/>
						{disabled.email ? (
							<button
								title={"Editar"}
								onClick={() => setDisabled({ ...AllDisabled, email: false })}
							>
								<EditIco />
							</button>
						) : (
							<div style={{ display: "flex" }}>
								<button title={"Confirmar"} type='submit'>
									<ConfirmIco />
								</button>
								<button
									title={"Cancelar"}
									type='button'
									onClick={() => {
										setDisabled(AllDisabled);
										setValues({ ...values, email: BeforeChanges.email });
									}}
								>
									<CancelIco />
								</button>
							</div>
						)}
					</form>
				</DataLine>
				<DataDivision />
				<DataLine>
					<SmartPhoneIco />
					<p>Telefone:</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setDisabled(AllDisabled);
						}}
					>
						<Data
							ref={phoneInput}
							value={values.phone}
							type='text'
							onChange={(e) =>
								setValues({
									...values,
									phone: formatarTelefone(e.target.value),
								})
							}
							minLength={14}
							maxLength={15}
							disabled={disabled.phone}
							required
						/>
						{disabled.phone ? (
							<button
								title='Editar'
								onClick={() => setDisabled({ ...AllDisabled, phone: false })}
							>
								<EditIco />
							</button>
						) : (
							<div style={{ display: "flex" }}>
								<button type='submit' title={"Confirmar"}>
									<ConfirmIco />
								</button>
								<button
									type='button'
									title={"Cancelar"}
									onClick={() => {
										setDisabled(AllDisabled);
										setValues({ ...values, phone: BeforeChanges.phone });
									}}
								>
									<CancelIco />
								</button>
							</div>
						)}
					</form>
				</DataLine>
				<DataDivision />
				<DataLine>
					<UserCPFIco />
					<p>CPF:</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setDisabled(AllDisabled);
						}}
					>
						<Data
							ref={cpfInput}
							value={values.cpf}
							type='text'
							onChange={(e) =>
								setValues({ ...values, cpf: formatarCPF(e.target.value) })
							}
							required
							disabled={disabled.cpf}
						/>
						{disabled.cpf ? (
							<button
								title='Editar'
								onClick={() => setDisabled({ ...AllDisabled, cpf: false })}
							>
								<EditIco />
							</button>
						) : (
							<div style={{ display: "flex" }}>
								<button title={"Confirmar"}>
									<ConfirmIco />
								</button>
								<button>
									<CancelIco
										title={"Cancelar"}
										onClick={() => {
											setDisabled(AllDisabled);
											setValues({ ...values, cpf: BeforeChanges.cpf });
										}}
									/>
								</button>
							</div>
						)}
					</form>
				</DataLine>
				<DataDivision />
			</UserData>
		</>
	);
}
