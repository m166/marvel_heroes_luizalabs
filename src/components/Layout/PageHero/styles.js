import styled from 'styled-components/macro';

import { media } from 'styles';

export const WrapperPageHero = styled.section`
  background-color: ${({ theme }) => theme.colors.lightgreen};
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 4rem;

  ${media.tablet`
    flex-direction: row;
  `}

  > div:first-child {
    flex: 1;
    ${media.tablet`
      flex-basis: 40%;
    `}
    ${media.desktop`
      flex-basis: 40%;
    `}
  }
  > div:last-child {
    flex: 1;
    ${media.tablet`
      flex-basis: 60%;
    `}
    ${media.desktop`
      flex-basis: 70%;
    `}
  }
`;

export const DetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  > div {
    padding-left: 16px;

    button {
      margin-top: 8px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  text-align: left;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  line-break: anywhere;
  line-height: 1.2em;
  margin: 0;
  text-transform: uppercase;
`;

export const Description = styled.div`
  margin-bottom: 1.5rem;
`;

export const Events = styled.div`
  display: flex;
  gap: 48px;
`;

export const Comics = styled.div``;

export const RaitingContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RaitingStar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ComicsTitle = styled.strong`
  display: block;
`;

export const ComicsContent = styled.div`
  align-items: center;
  display: flex;

  [data-icon='icon-svg'] {
    height: 30px;
    margin-right: 0.25rem;
    width: 30px;
  }
`;

export const LastComic = styled.div`
  margin-top: 1rem;
`;

export const LastComicTitle = styled.strong`
  margin-right: 0.25rem;
`;

export const LastComicContent = styled.span``;

export const Image = styled.img`
  margin: 0 auto;
  width: 200px;

  ${media.tablet`
    margin: 3rem;
    margin-right: 0;
    width: auto;
  `}
`;

export const SearchContainer = styled.div`
  width: 40%;
  position: relative;
  left: 30%;
`;

export const Movies = styled.div``;

export const MoviesContent = styled.div`
  align-items: center;
  display: flex;

  [data-icon='icon-svg'] {
    height: 30px;
    margin-right: 0.25rem;
    width: 30px;
  }
`;

export const MoviesTitle = styled.strong`
  display: block;
`;

export const HeaderContainer = styled.div`
  display: flex;
  max-height: 80px;
  padding: 0 15px;

  header * {
    margin: 0 !important;
    max-height: 100%;
    max-width: 100%;
    height: 100%;

    svg {
      height: 80px;
    }
  }

  > div {
    left: 0 !important;
    width: 50%;
  }
`;
