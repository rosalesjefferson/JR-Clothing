import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}
html{
	font-size: 62.5%;
    box-sizing: border-box;
}
body{
  font-family: 'Open Sans Condensed';
  font-weight: 300;
  line-height: 1.6;	
}

a:link,
a:visited{
  text-decoration: none;
}
.container{
  max-width: 145rem;
  margin: 0 auto;
}

// mixins
@mixin position($position, $top, $right, $bottom, $left){
    position: $position;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
}

// variables
$primary: crimson;
`