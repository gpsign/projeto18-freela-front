import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   * {
   box-sizing: border-box;
   flex-shrink: 0;
   user-select: none;
   }

 @font-face {
     font-family: 'Motley';
     src: url("/fonts/MotleyForcesRegular.ttf") format("truetype");
  }

  @font-face {
     font-family: 'ShiftyNotes';
     src: url("/fonts/ShiftyNotesRegular.ttf") format("truetype");
  }

  @font-face {
     font-family: 'AustieBost';
     src: url("/fonts/AustieBostChunky.ttf") format("truetype");
  }

  @font-face {
     font-family: 'ProximaNovaBold';
     src: url("/fonts/ProximaNovaBold.otf") format("opentype");
  }

  @font-face {
     font-family: 'ProximaNovaMedium';
     src: url("/fonts/ProximaNovaMedium.otf") format("opentype");
  }
`;

export default GlobalStyle;
