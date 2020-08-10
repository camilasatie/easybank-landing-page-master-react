import React from 'react'
import Container from '../Container/index'

import * as S from './styles'

import confetti from '../../assets/images/image-confetti.jpg';
import currency from '../../assets/images/image-currency.jpg';
import plane from  '../../assets/images/image-plane.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';

const articles = [
  {
    id: 1,
    image: currency,
    author: 'Claire Robson',
    title: 'Receive money in any currency with no fees',
    description: `The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`
  },
  {
    id: 2,
    image: restaurant,
    author: 'Wilson Hutton',
    title: 'Treat yoursel without worrying about money',
    description: `Our simple budgetting feature allows you to separate out your spending and set realistic limits each month. That means you...`
  },
  {
    id: 3,
    image: plane,
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    description: `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...`
  },
  {
    id: 4,
    image: confetti,
    author: 'Claire Robson',
    title: 'Our invite-only Beta accounts are no live!',
    description: `After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...`
  },
]

const SectionArticles = () => {
  return (
    <Container>
      <S.Wrapper>
        <S.Header>Latest Articles</S.Header>
        <S.ArticlesContainer>
          { 
            articles.map(article => (
              <S.Item key={article.key}>
                <S.Image src={article.image} />
                <S.Card>
                  <S.Author>By {article.author}</S.Author>
                  <S.Title>{article.title}</S.Title>
                  <S.Description>{article.description}</S.Description>
                </S.Card>
              </S.Item>
            ))
          }
        </S.ArticlesContainer>
      </S.Wrapper>
    </Container>
  )
}

export default SectionArticles