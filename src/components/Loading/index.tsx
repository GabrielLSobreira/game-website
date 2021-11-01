import gif from '../assets/gifs/Pacman.gif';
import { LoadingGames } from './styles';

export const Loading = () => {
  return (
    <LoadingGames>
      <img src={gif} alt="" />
    </LoadingGames>
  );
};
