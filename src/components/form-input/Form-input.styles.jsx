import styled, { css } from 'styled-components'

const variables = {
  colors:{
    white: '#fff',
    black: '#000',
    grey: 'grey'
  },
  fontSize:{
    small: '10px',
    medium: '12px',
    large: '16px'
  }
}

const unShrink = css`
  top: 10px;
  font-size: ${ variables.fontSize.large };
  color: ${ variables.colors.grey };
`

const shrink = css`
   top: -30px;
   font-size: ${ variables.fontSize.medium };
   color: ${ variables.colors.black };
`

const hasValue = (props) =>{
  if(props.value){
      return shrink
  }else{
    return unShrink
  }
}

export const FormInputGroup = styled.div`
 position: relative;
 margin: 45px 0;
`
export const Label = styled.label`
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    transition: .3s ease all;
    ${ unShrink }

    ${ hasValue }
`

export const Input = styled.input`
	  background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${ variables.colors.grey };
    margin: 25px 0;
    &:focus {
  		outline: none;
    }

    &:focus ~ ${ Label }{
  	 ${ shrink }
    }

`
