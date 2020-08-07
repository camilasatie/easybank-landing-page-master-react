import styled, {css} from 'styled-components'

export const Container = styled.div`
  margin: 18px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const Link = styled.a`
  ${({ theme }) => css`
    padding: 0 16px;
    font-size: 0.7777777777777778rem;
    text-decoration: none;
    color: ${theme.colors.darkBlue};
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
  height: 44px;
  background-image: linear-gradient(to right, ${theme.colors.limeGreen}, ${theme.colors.brightCyan});
  border-radius: 25px;
  padding: 15px 34px;
  font-weight: bold;
  color: #fff;
  `}
`