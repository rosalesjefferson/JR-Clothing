import styled from 'styled-components'

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	span{
  		font-size: 1.4rem;
  		.create-account{
  			display: none;
		  	@media (max-width: 56.25em){
	  			display: unset;
  			}
  			.or{
  				color: #000;
  			}
  			.create{
	  			color: crimson;
	  			border-bottom: 1px solid crimson;
  			}
  		}
  	}
`
export const Title = styled.h2`
 	margin: 10px 0;
    font-size: 2rem;
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 56.25em){
		justify-content: space-evenly;
	}
	@media (max-width: 25.625em){
		justify-content: space-between;
	}
	@media (max-width: 23.4375em){
		flex-direction: column;
		align-items: center;
		& >*:not(:last-child){
			margin-bottom: 2rem;
		}
	}
`
