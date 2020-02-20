// create the stage
// two const: stage width & height
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// func that creates the stage
// multi-dimensional array that reps rows & columns
// export it
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )