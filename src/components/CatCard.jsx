import { styled } from "styled-components";

const ilink =
	"https://www.webbox.co.uk/wp-content/webp-express/webp-images/uploads/2020/10/angry_cat_2-scaled-1568x1046.jpg.webp";

export default function CatCard({ cat }) {
	return (
		<CatContent url={cat.url}>
			<Gradient />
			<CatInfo>
				<h1>{cat.catName}</h1>
				<TagContainer>
					{cat.tags.map((tag) => {
						return <Tag>{tag.toUpperCase()}</Tag>;
					})}
				</TagContainer>

				<p>{cat.description}</p>
			</CatInfo>
		</CatContent>
	);
}

const Gradient = styled.div`
	height: 20px;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 90%
	);
`;

const CatContent = styled.div`
	width: 400px;
	height: 450px;

	position: relative;
	z-index: 1;

	background-image: url(${({ url }) => url});
	background-size: contain;
	background-repeat: no-repeat;

	border-radius: 8px;

	padding-top: 210px;

	filter: drop-shadow(0px 0px 5px lightgray);

	img {
		width: 100%;
		height: 250px;
		border-radius: 8px 8px 0px 0px;
		object-fit: cover;
	}

	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: scale(0.99);
		transition: transform 0.1s ease-out;
	}

	* {
		user-select: none;
	}

	overflow-y: scroll;
`;

const CatInfo = styled.div`
	min-height: 220px;
	max-height: fit-content;
	width: 100%;

	padding-left: 10px;
	padding-right: 10px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	background: rgb(233, 233, 233);
	background: radial-gradient(
		circle,
		rgba(233, 233, 233, 1) 15%,
		rgba(255, 255, 255, 1) 70%
	);

	h1 {
		font-family: "ProximaNovaBold";
		font-size: 36px !important;

		color: black;

		margin: 5px !important;
		white-space: nowrap;
	}

	p {
		font-family: "ProximaNovaMedium";
		font-size: 16px !important;

		margin: 5px !important;
		color: rgb(80, 80, 80);
		line-height: 20px;
	}
`;

const TagContainer = styled.div`
	width: 100%;
	height: fit-content;
	max-height: 65px;

	display: flex;
	flex-wrap: wrap;

	overflow-y: scroll;

	margin-bottom: 1px;

	div:not(:last-child) {
		margin-right: 0px;
	}
`;

const Tag = styled.div`
	width: fit-content;
	height: 22px;

	padding: 5px;

	margin: 5px;

	background: rgb(65, 65, 65);
	background: radial-gradient(
		circle,
		rgba(65, 65, 65, 1) 50%,
		rgba(41, 41, 41, 1) 100%
	);

	background-color: black;

	font-family: "ProximaNovaMedium";
	font-size: 13px;

	color: white;
`;
