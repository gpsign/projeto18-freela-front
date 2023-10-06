import styled from "styled-components";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { BiPlus, BiSolidUser, BiLogOut } from "react-icons/bi";

export const LockIco = styled(HiOutlineLockClosed)`
	position: absolute;
	top: 28px;
	left: 10px;
	font-size: 24px;
	color: #6a6c6f;
`;

export const MailIco = styled(HiOutlineMail)`
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
