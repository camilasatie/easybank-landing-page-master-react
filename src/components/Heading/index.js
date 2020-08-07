import React from 'react'
import Container from '../Container/index'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Heading  = () => {
  return (
    <Container>
      <S.Container>
        <img src={logo} alt="easybank logo"/>
        <S.List>
          <li><S.Link href="/#">Home</S.Link></li>
          <li><S.Link href="/#">About</S.Link></li>
          <li><S.Link href="/#">Contact</S.Link></li>
          <li><S.Link href="/#">Blog</S.Link></li>
          <li><S.Link href="/#">Careers</S.Link></li>
        </S.List>
        <S.Button>Request Invite</S.Button>
      </S.Container>
    </Container>
  )
}

export default Heading