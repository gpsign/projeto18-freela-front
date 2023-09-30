import { styled } from "styled-components";

export default function MiauCard({
	id,
	catname,
	description,
	url,
	ownername,
	number,
	tags,
	setClickedMiau,
}) {
	console.log(tags);

	return (
		<MiauContent
			onClick={() => {
				setClickedMiau({
					id: id,
					catname: catname,
					description: description,
					url: url,
					ownername: ownername,
					number: number,
					tags: tags,
				});
			}}
		>
			<img src={url} alt={catname} />
			<MiauInfo>
				<h1>{catname}</h1>
				<MiauDescription>
					<TagContainer>
						{tags.map((tag, i) => {
							return (
								<Tag key={i}>
									<p>{tag}</p>
								</Tag>
							);
						})}
					</TagContainer>
					<p>{description}</p>
				</MiauDescription>
			</MiauInfo>
		</MiauContent>
	);
}

const MiauContent = styled.li`
	width: 100%;
	height: 175px;

	padding: 5px;

	position: relative;

	background-color: #7d4f4f;
	border-radius: 14px;
	flex-shrink: 0;

	transition: transform 0.1s ease-out, filter 0.15s ease-in-out;

	img {
		width: 175px;
		height: 100%;
		border-radius: 14px;
	}

	&:hover {
		filter: brightness(1.15);
		transition: filter 0.15s ease-in-out;
		cursor: pointer;
	}

	&:active {
		transform: scale(0.99);
		transition: transform 0.1s ease-out;
	}

	* {
		user-select: none;
	}
`;

const MiauInfo = styled.div`
	width: 370px;
	height: 165px;

	position: absolute;
	top: 5px;
	left: 190px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	overflow-x: hidden;

	h1 {
		font-family: "Motley";
		font-size: 28px !important;

		color: #fcf6e3;

		margin: 5px !important;
		white-space: nowrap;
	}
`;

const MiauDescription = styled.div`
	width: 100%;
	height: 120px;

	padding: 8px;

	background-color: #905b5b;
	border-radius: 14px;

	overflow-y: scroll;

	p {
		font-family: "AustieBost";
		font-size: 16px;

		line-height: 18px;

		color: #fcf6e3;
	}
`;

const TagContainer = styled.div`
	width: 100%;
	height: fit-content;

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
	height: 25px;

	padding: 2px;

	margin: 3px;

	background-color: #fcf6e3;
	border-radius: 20px;

	flex-shrink: 0;

	p {
		padding: 3px;
		font-family: "Motley";
		font-size: 16px;

		color: #7d4f4f;
		border-radius: 12px;
	}
`;
