import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';

type Info = {
  name: string;
  level: number;
  victoryRate: number;
};
const InfoBox = ({info}: {info: Info}) => (
  <InfoBoxContainer>
    <Box sx={{display: 'flex', gap: '6px', alignItems: 'end'}}>
      <Name>{info.name}</Name>
      <Box sx={{color: '#F3C73B'}}>
        <LevelNumber>{info.level}</LevelNumber>
        <LevelText>LVL</LevelText>
      </Box>
    </Box>
    <Typography
      sx={{font: '12px nunito sans', letterSpacing: '0.4%'}}
      variant="caption">
      {info.victoryRate}% victory rate
    </Typography>
  </InfoBoxContainer>
);

export default InfoBox;

const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center
  gap: 4px;
  width: 86px;
`;

const Name = styled.span`
  font: 28px Nunito Sans sans-serif;
  font-weight: 400;
  text-transform: capitalize;
`;

const LevelNumber = styled.span`
  font: 15px Nunito Sans sans-serif;
  font-weight: 600;
`;

const LevelText = styled.span`
  font: 8px Nunito Sans sans-serif;
  font-weight: 400;
  margin-left: 2px;
`;
