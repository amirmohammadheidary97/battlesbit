import {keyframes} from '@mui/material';

export const looseAnimation = () => keyframes`
0%{
  opacity:0.2;
  transform: scale(0.5);
  translate(-50%, -50%);
}
100%{
  opacity:1;
  transform: scale(1);
  translate(-50%, -50%);
}
`;

export const winAnimation = () => keyframes`
0%{
  opacity:0;
  transform: scale(1.8);
  translate(-50%, -50%);
}
30%{
  opacity:1;
  transform: scale(0.8);
  translate(-50%, -50%);
}
50%{
  opacity:1;
  transform: scale(1.1);
  translate(-50%, -50%);
}
100%{
  opacity:1;
  transform: scale(1);
  translate(-50%, -50%);
}
`;
