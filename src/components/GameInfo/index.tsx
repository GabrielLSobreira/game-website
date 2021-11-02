import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_HOST, API_KEY } from '../../hooks/useFetch/constants';
import { Loading } from '../Loading';
import {
  GameContainer,
  GameImg,
  GameInfoS,
  GameSite,
  MoreInfo,
  Sreenshot,
  StyledLink,
} from './styles';
import { IoMdArrowRoundBack } from 'react-icons/io';

type GameInf = {
  title: string;
  thumbnail?: string;
  description: string;
  game_url?: string;
  release_date: string;
  genre: string;
  platform: string;
  screenshots?: [
    {
      id: number;
      image: string;
    },
  ];
};

export const GameInfo = (): ReactElement => {
  const [game, setGame] = useState<GameInf>({
    title: '',
    description: '',
    release_date: '',
    genre: '',
    platform: '',
  });
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/game', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          id,
        },
      })
      .then((res) => setGame(res.data))
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StyledLink to="/">
            <IoMdArrowRoundBack />
          </StyledLink>
          <GameContainer>
            <GameImg>
              <img src={game.thumbnail} alt="" />
            </GameImg>
            <GameInfoS>
              <h3>
                {game.title} <span>Free</span>
              </h3>
              <p>{game.description}</p>
              <MoreInfo>
                <span>
                  <strong>Release date: </strong> {game.release_date}
                  <span></span>
                  <strong>Genre: </strong>
                  {game.genre}
                </span>
                <span>
                  <strong>Platform: </strong> {game.platform}
                </span>
              </MoreInfo>
              <GameSite>
                <span>Play now 🎮: </span>
                <a href={game.game_url} target="_blank" rel="noreferrer">
                  <span>{game.game_url}</span>
                </a>
              </GameSite>
            </GameInfoS>
          </GameContainer>

          <Sreenshot>
            {game.screenshots?.map((screenshot) => (
              <img key={screenshot.id} src={screenshot.image} alt="" />
            ))}
          </Sreenshot>
        </>
      )}
    </>
  );
};
