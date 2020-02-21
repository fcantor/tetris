import { useState } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = () => {
  const [stage, setStage] = useState(createStage()); // state for the stage

  return [stage, setStage];
}