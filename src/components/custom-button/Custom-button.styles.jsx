import styled, { css } from 'styled-components'

const defaultButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: black;
  }

`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: black;
      color: white;
    }
`
const googleSignInStyles = css`
	background: #4285f4;
  color: #fff;
	border: 1px solid #4285f4;
  border-radius: 5px;

    &:hover{
      background: #fff;
      color: #4285f4;
    }
`

const getButtonStyles = (props) =>{
	if(props.isGoogleSignIn){
		return googleSignInStyles
	}else if(props.invertedButtonStyles){
		return invertedButtonStyles
	}else{
		return defaultButtonStyles
	}
}

export const CustomButtonStyle = styled.button`
  width: 180px;
  letter-spacing: 0.5px;
  padding: 15px 0;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .15);
  transition: all .5s;
  ${ getButtonStyles }

  @media (max-width: 30.3125em){
    width: 150px;
    font-size: 1.3rem;
  }

    @media (max-width: 23.4375em){
      width: 100%;
    }
  }
`


