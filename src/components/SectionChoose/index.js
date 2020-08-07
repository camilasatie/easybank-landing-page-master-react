import React from 'react'
import Container from '../Container/index'

import iconOnline from '../../assets/images/icon-online.svg'
import iconBudgeting from '../../assets/images/icon-budgeting.svg'
import iconOnboarding from '../../assets/images/icon-onboarding.svg'
import iconApi from '../../assets/images/icon-api.svg'

import * as S from './styles'

const items = [
  {
    id: 1,
    image: iconOnline,
    title: 'Online Banking',
    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
  },
  {
    id: 2,
    image: iconBudgeting,
    title: 'Simple Budgeting',
    description: 'See exactly where your money goes each month. Receive notifications when you are close to hitting your limits.'
  },
  {
    id: 3,
    image: iconOnboarding,
    title: 'Fast Onboarding',
    description: 'We do not do branches. Open your account in minutes online and start taking control of your finances right away.'
  },
  {
    id: 4,
    image: iconApi,
    title: 'Open API',
    description: 'Manage your savings, investiments, pension, and much more from one account. Tracking your money has never been easier.'
  }
]

const SectionChoose = () => (
  <S.Background>
    <Container>
      <S.Header>Why choose Easybank</S.Header>
      <S.Paragraph>We leverage Open Banking to turn your bank account into your financial hub.<br />Control your finances like never before.</S.Paragraph>
      <S.ItemsWrapper>
        {
          items.map(item => (
            <S.ItemContainer key={item.id}>
              <img src={item.image} />
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.Paragraph>{item.description}</S.Paragraph>
            </S.ItemContainer>)
          ) 
        }
      </S.ItemsWrapper>
    </Container>
  </S.Background>

)

export default SectionChoose;