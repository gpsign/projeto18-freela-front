import { Alert, Header } from "../components/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import { DataContainer } from "../styled/Profile.js";
import { UserProfileData, UserCatsList } from "../components/index.js";
import { EditPhotoWindow } from "../components/EditPhotoWindow.jsx";

export function Profile() {
	return (
		<>
			<Alert />
			<Header />
			<EditPhotoWindow />
			<CentralizerContainer>
				<DataContainer>
					<UserProfileData />
					<h1>Meus Gatos:</h1>
					<UserCatsList />
				</DataContainer>
			</CentralizerContainer>
		</>
	);
}
