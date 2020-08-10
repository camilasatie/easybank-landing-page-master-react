import styled, {css} from 'styled-components'

export const Background = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100%;
    background-color: ${theme.colors.darkBlue};
    padding: 112px 0;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

// LEFT CONTAINER 
export const LeftContainer = styled.div`

`

export const Logo = styled.img`` 

export const SocialWrapper = styled.div`

`
export const SocialImage = styled.img`
  width: 20px;
  height: 20px;
`

// MIDDLE CONTAINER
export const MiddleContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const List = styled.ul`
  list-style: none;
  color: #fff;
`

export const ListItem = styled.li``


// RIGHT CONTAINER
export const RightContainer = styled.div``

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

export const Copyright = styled.span``



