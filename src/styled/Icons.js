import styled from "styled-components";
import {
	BiPlus,
	BiSolidUser,
	BiLogOut,
	BiIdCard,
	BiUser,
	BiCheck,
	BiPhone,
	BiEnvelope,
	BiPencil,
	BiTrash,
} from "react-icons/bi";
import { TbLockCheck, TbLock } from "react-icons/tb";
import { IoMdArrowRoundBack, IoMdClose } from "react-icons/io";
import { BsPhone, BsCheckLg } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const EditPhotoIco = styled(BiPencil)`
	font-size: 26px;
	transition: all 0.2s;
`;

export const EditCatIco = styled(BiPencil)`
	position: absolute;
	top: 5px;
	right: 35px;
	color: black;
	font-size: 26px;
	padding: 4px;
	border-radius: 100%;

	&:hover {
		background-color: #cbcdd0;
		cursor: pointer;
		filter: brightness(1.06);
	}

	&:active {
		transform: translateY(1px);
		transition: transform 0.1s ease-out;
	}
`;

export const TrashIco = styled(BiTrash)`
	position: absolute;
	top: 5px;
	right: 5px;
	color: black;
	font-size: 26px;
	padding: 4px;
	border-radius: 100%;

	&:hover {
		background-color: #ffa5a5;
		cursor: pointer;
		filter: brightness(1.06);
	}

	&:active {
		transform: translateY(1px);
		transition: transform 0.1s ease-out;
	}
`;

export const CancelIco = styled(IoMdClose)`
	color: black;
	font-size: 28px;
	padding: 4px;
	border-radius: 100%;
	background-color: #ffa5a5;
	margin-left: -4px;

	&:hover {
		cursor: pointer;
		filter: brightness(1.06);
	}

	&:active {
		transform: translateY(1px);
		transition: transform 0.1s ease-out;
	}
`;

export const ConfirmIco = styled(BsCheckLg)`
	color: black;
	font-size: 28px;
	padding: 4px;
	border-radius: 100%;
	background-color: #a6ecbb;
	margin-left: -4px;

	&:hover {
		cursor: pointer;
		filter: brightness(1.06);
	}

	&:active {
		transform: translateY(1px);
		transition: transform 0.1s ease-out;
	}
`;

export const EditIco = styled(BiPencil)`
	color: #6a6c6f;
	font-size: 28px;
	padding: 4px;
	border-radius: 100%;
	margin-left: -4px;

	&:hover {
		cursor: pointer;
		background-color: #cbcdd0;
	}

	&:active {
		transform: translateY(1px);
		transition: transform 0.1s ease-out;
	}
`;

export const BackArrow = styled(IoMdArrowRoundBack)`
	font-size: 56px;
	padding: 5px;
	margin: 68px 15px 0px 0px;

	position: sticky;
	top: 68px;

	filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3));

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);

	&:active {
		transform: translateY(2px);
		transition: transform 0.1s ease-out;
	}

	cursor: pointer;
	border-radius: 100%;
`;

export const UserEmailIco = styled(AiOutlineMail)`
	margin-right: 7px;
	font-size: 32px;
	color: black;
`;

export const SmartPhoneIco = styled(BsPhone)`
	margin-right: 5px;
	font-size: 32px;
	color: black;
`;

export const UserCPFIco = styled(BiIdCard)`
	margin-right: 5px;
	font-size: 32px;
	color: black;
`;

export const PhoneIco = styled(BiPhone)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const CheckIco = styled(BiCheck)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 22px;
	color: #4a4c4f;
`;

export const CheckLockIco = styled(TbLockCheck)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const NameIco = styled(BiUser)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const CardIco = styled(BiIdCard)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const LockIco = styled(TbLock)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const MailIco = styled(BiEnvelope)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const PlusIco = styled(BiPlus)`
	font-size: 22px;
	margin-right: 10px;
`;

export const UserIco = styled(BiSolidUser)`
	font-size: 22px;
	margin-right: 10px;
`;

export const LogOutIco = styled(BiLogOut)`
	font-size: 22px;
	margin-right: 10px;
`;
