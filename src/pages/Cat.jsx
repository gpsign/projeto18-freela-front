import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, ArrayToTags, Header } from "../components/index.js";
import { CentralizerContainer } from "../styled/CommonStyles.js";
import {
	BackArrow,
	SmartPhoneIco,
	UserEmailIco,
} from "../styled/Icons.js";
import { DataContext } from "../context/data.jsx";
import DefaultPic from "/images/Default.jpg";
import {
	CatContainer,
	CatData,
	CatDescription,
	CatName,
	CatPhoto,
	Contact,
	OwnerContact,
	OwnerData,
	OwnerName,
	OwnerPhoto,
	OwnerTitle,
	TagContainer,
} from "../styled/Cat.js";

export function Cat() {
	const { catId } = useParams();
	const navigate = useNavigate();

	const DataInfo = useContext(DataContext);
	const { catPage, setCatPage } = DataInfo;

	useEffect(() => {
		//!catPage && getCatData(catId, DataInfo, AuthInfo);
	});

	return (
		<>
			<Alert />
			<Header />
			<CentralizerContainer>
				<BackArrow
					onClick={() => {
						setCatPage(undefined);
						navigate("/home");
					}}
				/>
				<CatContainer>
					<CatPhoto src={catPage.url} />
					<CatData>
						<CatName>{catPage.catName}</CatName>
						<TagContainer>
							<ArrayToTags array={catPage.tags} $size={"large"} />
						</TagContainer>
						<CatDescription>{catPage.description}</CatDescription>
					</CatData>
				</CatContainer>
				<OwnerData>
					<OwnerTitle>
						<OwnerPhoto
							src={catPage.owner.url ? catPage.owner.url : DefaultPic}
						/>
						<OwnerName>{catPage.owner.username}</OwnerName>
					</OwnerTitle>
					<OwnerContact>
						<Contact>
							<SmartPhoneIco />
							{catPage.owner.phone}
						</Contact>
						<Contact>
							<UserEmailIco />
							{catPage.owner.email}
						</Contact>
					</OwnerContact>
					<button>QUERO CONTRATAR</button>
				</OwnerData>
			</CentralizerContainer>
		</>
	);
}
