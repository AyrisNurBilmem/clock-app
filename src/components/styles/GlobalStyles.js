import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    background-image: ${({ theme }) => theme.body};
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    color:white;
    font-family: 'Montserrat', sans-serif;
    transition: all .5s linear;
  }
`;

export const morningTheme = {
  body: "url('https://dougammons.com/wp-content/uploads/Profile-Head-1-2.jpg')",
};

export const nightTheme = {
  body: "url('https://www.pixel4k.com/wp-content/uploads/2019/03/silhouette-astronomy-4k_1551644487.jpg')",
};

// night: https://cdn.wallpapersafari.com/83/72/LnqDHB.jpg
//morning: https://dougammons.com/wp-content/uploads/Profile-Head-1-2.jpg
