import styled, { css } from 'styled-components'

export const CheckOutPageContainer = styled.div`
  width: 75%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
    button{
    margin-left: auto;
    margin-top: 50px;
  }
`
export const Header = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderTitle = styled.span`
  text-transform: capitalize;
  width: 23%;
  span{
    font-size: 2rem;
    font-weight 600;
  }

  &:last-child{
    width: 8%;
  }
`
export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

export const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: crimson;
`


