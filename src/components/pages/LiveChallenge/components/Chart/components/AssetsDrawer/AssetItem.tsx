import {useEffect, useState} from 'react';
import type {Theme} from '@mui/material';
import {Box, keyframes, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import defaultAssetIcon from '@/assets/img/icons/general/tet.svg';
import {Center} from '@/components/atoms/Center';
import {type Asset} from '@/gql-codegen/generated';
import {numberWithCommas} from '@/utils/money-number-fromatter';

type Props = {
  asset: Asset;
  isSelected: boolean;
  onClick: (asset: Asset) => void;
};

export const AssetItem = ({asset, onClick, isSelected}: Props) => {
  //
  const theme = useTheme();
  const {id, priceUSD, volumeUSD24Hr, iconUrl, name} = asset;
  const handleClick = () => onClick(asset);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [prevPrice, setPrevPrice] = useState<number>();

  useEffect(() => {
    let timerId: any = null;
    if (priceUSD !== prevPrice) {
      setIsAnimating(true);
      timerId = setTimeout(() => {
        setPrevPrice(priceUSD);
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, 400);
    }

    return () => {
      if (timerId !== null) clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceUSD]);
  //
  return (
    <Grid
      onClick={handleClick}
      container
      size={12}
      spacing={1}
      sx={{
        padding: '0.25rem 0.5rem 0.25rem 0.5rem',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: isSelected ? '#3a3c43' : 'transparent',
        cursor: 'pointer',
      }}>
      <Grid size="auto">
        <Center
          fullSize
          containerProps={{
            sx: {
              img: {
                width: '2rem',
              },
            },
          }}>
          <img
            src={iconUrl ?? defaultAssetIcon}
            loading="lazy"
            onError={e => {
              e.currentTarget.setAttribute('src', defaultAssetIcon);
            }}
          />
        </Center>
      </Grid>
      <Grid size="grow">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
          }}>
          <Typography variant="body1" color={theme.palette.text.primary}>
            {name ?? id}
          </Typography>
          <Typography
            variant="caption"
            color={theme.palette.text.secondary}
            sx={
              isAnimating
                ? {
                    animation: `${animation(theme)} 0.5s forwards`,
                  }
                : {}
            }>
            {numberWithCommas(priceUSD)}
          </Typography>
        </Box>
      </Grid>
      <Grid size="auto">
        <Center fullSize>
          {volumeUSD24Hr !== undefined && (
            <Typography
              variant="button"
              color={theme.palette.success.main}
              sx={{
                fontSize: '0.75rem',
                color: volumeUSD24Hr > 0 ? 'text9' : 'text10',
              }}>
              {`${volumeUSD24Hr > 0 ? '+' : ''}${volumeUSD24Hr}%`}
            </Typography>
          )}
        </Center>
      </Grid>
    </Grid>
  );
};

const animation = (theme: Theme) => keyframes`
  0%{
    color:${theme.palette.text.secondary};
    transform: scale(1);
  }
  100%{
    color:${theme.palette.text.primary};
    transform: scale(1.1);
  }
`;
