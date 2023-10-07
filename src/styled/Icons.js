import styled from "styled-components";
import {
	BiPlus,
	BiSolidUser,
	BiLogOut,
	BiIdCard,
	BiUser,
	BiCheck,
	BiPhone,
	BiLock,
	BiEnvelope,
	BiLockAlt,
} from "react-icons/bi";
import { TbLockCheck, TbLock } from "react-icons/tb";

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
