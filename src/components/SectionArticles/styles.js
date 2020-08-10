import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  margin: 96px 0 106px;
`

export const Header = styled.h1`
    ${({ theme }) => css`
    font-size: 2.5555555555555554rem;
    font-weight: normal;
    color: ${theme.colors.darkBlue};
    padding-bottom: 35px;
  `}
`

export const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Item = styled.div`
  width: 100%;
  max-width: 255px;
  display: flex; 
  flex-direction: column; 
`

export const Image = styled.img`
  width: 255px;
  height: 200px;
  border-radius: 5px;
`

export const Card = styled.div`
  padding: 30px;
`

export const Author = styled.span`
  ${({ theme }) => css`
    font-size: 0.556rem;
    color: ${theme.colors.grayishBlue};
  `}
`

export const Title = styled.h3`
    ${({ theme }) => css`
    font-size: 0.889rem;
    color: ${theme.colors.darkBlue};
    padding: 15px 0;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 0.778rem;
    color: ${theme.colors.grayishBlue};
  `}
  
`