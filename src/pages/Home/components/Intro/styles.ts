import styled from 'styled-components'

import BackgroundIntro from './assets/BackgroundIntro.png'

export const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${BackgroundIntro});
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(80px);
  background-repeat: no-repeat;

  height: 34rem;
  width: 100%;
`
export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;

    img {
      display: none;
    }
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;

    margin-top: 1rem;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const ItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  padding-top: 4.125rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
