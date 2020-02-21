import { useState } from 'react';
import { randomTetromino } from '../tetrominos';

/*
  usePlayer is a custom hook that create an initial state for the player
*/
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  return [player];
}