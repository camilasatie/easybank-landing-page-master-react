import React from 'react'
import Container from '../Container/index'

import * as S from './styles'

import logo from '../../assets/images/logowhite.svg'
import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconYoutube from '../../assets/images/icon-youtube.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'
import iconPinterest from '../../assets/images/icon-pinterest.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <S.Background >
      <Container>
      <S.Wrapper>
        <S.LeftContainer>
            <S.Logo src={logo} />
            <S.SocialWrapper>
              <S.SocialImage src={iconFacebook} />
              <S.SocialImage src={iconYoutube} />
              <S.SocialImage src={iconTwitter} />
              <S.SocialImage src={iconPinterest} />
              <S.SocialImage src={iconInstagram} />
            </S.SocialWrapper>
          </S.LeftContainer>

          <S.MiddleContainer>
            <S.List>
              <S.ListItem>About Us</S.ListItem>
              <S.ListItem>Contact</S.ListItem>
              <S.ListItem>Blog</S.ListItem>
            </S.List>
            <S.List>
              <S.ListItem>Careers</S.ListItem>
              <S.ListItem>Support</S.ListItem>
              <S.ListItem>Privacy Policy</S.ListItem>
            </S.List>
          </S.MiddleContainer>

          <S.RightContainer>
            <S.Button>Request Invite</S.Button> 
            <S.Copyright>© Easybank. All Rights Reserved</S.Copyright>
          </S.RightContainer>

        </S.Wrapper>
      </Container>

    </S.Background>

  )
}

export default Footer

