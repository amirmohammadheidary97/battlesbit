import styled from '@emotion/styled';
import Grid from '@mui/material/Grid2';

import type {PriceInfoProps} from './PriceInfo';
import {PriceInfo} from './PriceInfo';

import bg1 from '@/assets/img/bg/matchcard1-bg.png';

type GameCardProps = {
  chipText: string;
  vsText: string;
  ticketPrice: PriceInfoProps;
  prize: PriceInfoProps;
};

export const GameCard: React.FC<GameCardProps> = ({
  chipText,
  vsText,
  ticketPrice,
  prize,
}) => (
  <CardWrapper container spacing={2}>
    <Grid size={12}>
      <InfoIcon
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeaca34ecbf885858b71fc59e88cb9e32c1b28db0b2b9a9641288624063c6cc4?placeholderIfAbsent=true&apiKey=e3593f98c439412182035cc69eb42dc1"
        alt="Info"
      />
      <ChipWrapper>
        <Chip>
          <ChipText>{chipText}</ChipText>
        </Chip>
      </ChipWrapper>
      <VsText>{vsText}</VsText>
    </Grid>
    <Grid size={12} container spacing={2}>
      <Grid size={6}>
        <PriceInfo {...ticketPrice} />
      </Grid>
      <Grid size={6}>
        <PriceInfo {...prize} />
      </Grid>
    </Grid>
  </CardWrapper>
);

const CardWrapper = styled(Grid)`
  position: relative;
  z-index: 10;
  display: flex;
  min-height: 151px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-end;
  padding: 12px;
  background: url(${bg1}) no-repeat;
  background-size: 100% 100%;
`;

const InfoIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  position: absolute;
  z-index: 0;
  right: 12px;
  top: 12px;
  height: 20px;
`;

const ChipWrapper = styled.div`
  z-index: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  color: var(--primary-main, #f3c73b);
  white-space: nowrap;
  letter-spacing: 0.16px;
  justify-content: flex-start;
  flex: 1;
  font:
    13px/1 Roboto,
    sans-serif;
`;

const Chip = styled.div`
  border-radius: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  padding: 3px 4px;
  border: 1px solid rgba(243, 199, 59, 1);
`;

const ChipText = styled.span`
  font-feature-settings:
    'liga' off,
    'clig' off;
  align-self: stretch;
  margin: auto 0;
  padding: 0 6px;
`;

const VsText = styled.div`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  z-index: 0;
  margin-top: 10px;
`;
