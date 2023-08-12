import { styled } from "styled-components";

export default function Logo() {
    return <LogoName>ULTIMATE FASHION CATS</LogoName>
}

const LogoName = styled.h1`
	font-family: "Motley";
	font-size: 80px;

	margin-top: -110px;
	margin-bottom: 60px;

    position: fixed;
    top: 200px;
    left : auto;

    white-space: normal;
    
    text-align: center; 
`;
