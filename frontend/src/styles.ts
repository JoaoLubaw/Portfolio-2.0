import { createGlobalStyle } from "styled-components";

export const colors = {
  darkblue: "#1F2B32",
  darkerblue: "#141C21",
  white: "#FFFFFF",
  orange: "#DE4F39",
  darkerorange: "#AE2712",
  lightgrey: "#486476",
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
};

export const GlobalCss = createGlobalStyle`
* {

  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  color: ${colors.white};
  list-style: none;
	text-decoration: none;

  background: none;
  border:none;
}

body {
  background-color: ${colors.darkerblue}
}

.container {
padding: 0 220px;

}
`;
