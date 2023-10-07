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
} from "react-icons/bi";
import { TbLockCheck, TbLock } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";

export const BackArrow = styled(IoMdArrowRoundBack)`
	border-radius: 100%;

	font-size: 42px;

	padding: 5px;
	margin-right: 10px;

	cursor: pointer;

	filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3));

	background: rgb(247, 247, 247);
	background: radial-gradient(
		circle,
		rgba(247, 247, 247, 1) 15%,
		rgba(255, 255, 255, 1) 100%
	);
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
