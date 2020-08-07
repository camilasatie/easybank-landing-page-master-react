import styled, {css} from 'styled-components'

export const Background = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100%;
    background-color: ${theme.colors.lightGrayishBlue};
    padding: 112px 0;
  `}
`

export const Header = styled.h1`
    ${({ theme }) => css`
    font-size: 2.5555555555555554rem;
    font-weight: normal;
    color: ${theme.colors.darkBlue};
    padding-bottom: 35px;
  `}
`

export const Paragraph = styled.p`
    ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.colors.grayishBlue};
  `}
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ItemContainer = styled.div`
    width: 100%;
    max-width: 266px;
    padding-top: 75px;
`

export const ItemTitle = styled.h3`
  ${({ theme }) => css`
    padding: 45px 0 32px;
    color: ${theme.colors.darkBlue};
    font-weight: normal;
  `}
`