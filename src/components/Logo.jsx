import { styled } from "styled-components";

export default function Logo() {
    return <LogoName>Fashion Cats</LogoName>
}

const LogoName = styled.h1`
	font-family: "ProximaNovaBold";
	font-size: 100px;

	margin-top: -70px;
	margin-bottom: 60px;

    position: fixed;
    top: 200px;
    left : auto;

    white-space: normal;
    
    text-align: center; 
`;
