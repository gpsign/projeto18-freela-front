import { CatsGrid } from "../styled/Home.js";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, DataContext } from "../context/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import {
	redirectLoginIfNull,
	searchCats,
	getPopularTagsList,
	getAllCatsList,
} from "../utils/index.js";
import {
	Header,
	Alert,
	NewCatWindow,
	HomeLeftBox,
	CatsToGrid,
} from "../components/index.js";

export default function Home() {
	const navigate = useNavigate();
	const DataInfo = useContext(DataContext);
	const AuthInfo = useContext(AuthContext);

	const { searchValue } = DataInfo;

	useEffect(() => {
		redirectLoginIfNull(AuthInfo, navigate);

		searchValue != ""
			? searchCats(DataInfo, AuthInfo)
			: getAllCatsList(DataInfo, AuthInfo);

		getPopularTagsList(DataInfo, AuthInfo);
	}, []);

	return (
		<>
			<NewCatWindow />
			<Alert />
			<CentralizerContainer>
				<Header />
				<HomeLeftBox />
				<CatsGrid>
					<CatsToGrid />
				</CatsGrid>
			</CentralizerContainer>
		</>
	);
}
