import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
 box-sizing: border-box;
 flex-shrink: 0;
}

 @font-face {
     font-family: 'Motley';
     src: url("/fonts/MotleyForcesRegular.ttf") format("truetype");
  }

  @font-face {
     font-family: 'ShiftyNotes';
     src: url("/fonts/ShiftyNotesRegular.ttf") format("truetype");
  }
`;
export default GlobalStyle;
