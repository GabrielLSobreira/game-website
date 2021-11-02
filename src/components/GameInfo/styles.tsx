import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Link } from 'react-router-dom';

export const GameContainer = styled.div`
  padding: 0.3rem 1rem;
  display: flex;
  flex-direction: column;
  color: #cccccc;
`;

export const GameImg = styled.div`
  img {
    border-radius: 10px;
    box-shadow: 0px 0px 3px whitesmoke;
    @media (max-width: ${breakpoints.tablet}) {
      width: 300px;
    }
  }
`;

export const GameInfoS = styled.div`
  h3 {
    font-size: 1.8rem;
    padding: 0;
    margin: 1rem 0;
    font-weight: bold;
    color: #fff;
    span {
      color: #0be41d;
      font-size: 1.3rem;
    }
  }
  p {
    font-size: 1.3rem;
    width: 70%;
    color: #c7c7c7;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`;

export const MoreInfo = styled.div`
  margin-bottom: 1rem;
  span {
    margin-right: 1.5rem;
    font-size: 1.3rem;
    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      margin: 1rem 0;
    }
    strong {
      color: #fff;
    }
  }
`;

export const GameSite = styled.div`
  margin-bottom: 0.5rem;
  span {
    font-size: 1.3rem;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
  }
`;

export const Sreenshot = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  img {
    margin-top: 1.3rem;
    margin-bottom: 0.9rem;
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px whitesmoke;
    @media (max-width: ${breakpoints.tablet}) {
      max-width: 280px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border: none;
  color: #fff;
  font-size: 2em;
  border-radius: 30px;
  text-decoration: none;
  margin: 0 0.2rem;
  margin-top: 0.5rem;
`;
