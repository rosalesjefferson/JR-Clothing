import styled from 'styled-components'

export const CartItemCard = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-auto-rows: 10rem;
  grid-gap: 1.5rem;
  height: 10rem;
  margin-bottom: 1.5rem;
  @media (max-width: 25em){
    grid-auto-rows: unset;
    grid-template-columns: 40% 1fr;
    grid-gap: 1rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const ItemDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
   .quantity{
      font-size: 1.8rem;
      @media (max-width: 25em){
        font-size: 1.3rem;
      }
   }
`
export const Name = styled.span`
  font-size: 2rem;
  @media (max-width: 25em){
    font-size: 1.3rem;
  }
`
