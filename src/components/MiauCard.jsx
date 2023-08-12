import { styled } from "styled-components";

export default function MiauCard() {
	return (
		<MiauContent>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKAdWj_0-N6Jgt46u_s5SQaypaHiFQ5-bIw&usqp=CAU"
				alt="cat"
			/>
			<MiauInfo>
				<h1>Monday left me brokeeeneeeee</h1>
				<MiauDescription>
					<TagContainer>
						<Tag>
							<p>GATO</p>
						</Tag>{" "}
						<Tag>
							<p>Delicioso</p>
						</Tag>
						<Tag>
							<p>Saboroso</p>
						</Tag>
						<Tag>
							<p>Gostoso</p>
						</Tag>
						<Tag>
							<p>Gatoso</p>
						</Tag>
						<Tag>
							<p>Chiwa</p>
						</Tag>
						<Tag>
							<p>monday</p>
						</Tag>
						<Tag>
							<p>GATO</p>
						</Tag>
						<Tag>
							<p>GATO</p>
						</Tag>
						<Tag>
							<p>GATO</p>
						</Tag>
						<Tag>
							<p>GATO</p>
						</Tag>
						<Tag>
							<p>GATO</p>
						</Tag>
					</TagContainer>
					<p>
						Monday left me broken Tuesday, I was through with hoping Wednesday,
						my empty arms were open Thursday, waiting for love, waiting for
						loveMonday left me broken Tuesday, I was through with hoping
						Wednesday, my empty arms were open Thursday, waiting for love,
						waiting for loveMonday left me broken Tuesday, I was through with
						hoping Wednesday, my empty arms were open Thursday, waiting for
						love, waiting for loveMonday left me broken Tuesday, I was through
						with hoping Wednesday, my empty arms were open Thursday, waiting for
						love, waiting for love
					</p>
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

	background-color: #7D4F4F;
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
        white-space:nowrap; 
	}
`;

const MiauDescription = styled.div`
	width: 100%;
	height: 120px;

	padding: 8px;

	background-color: #905B5B;
	border-radius: 14px;
	flex-shrink: 0;

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

	margin-bottom: 15px;

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
