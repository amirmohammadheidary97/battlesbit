import {Avatar, Box, Typography, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid2';

import fakeAvatar from '@/assets/img/icons/avatars/avatar1.svg';
import type {BoundingRect} from '@/hooks/custom/useElementRect';
import {useElementRect} from '@/hooks/custom/useElementRect';
import {flex} from '@/utils/flexHelper';

type Props = {
  progressPercent: number;
  name: string;
  isPlayerCurrentUser?: boolean;
  containerRect: BoundingRect | undefined;
  income?: number;
};

const isNear = (args: {
  markWidth?: number;
  containerWidth?: number;
  progressPercent: number;
}) => {
  const nearState = {nearToStart: false, nearToEnd: false};
  if (args?.markWidth === undefined || args.containerWidth === undefined)
    return nearState;
  const progressWidth = args?.containerWidth * (args?.progressPercent / 100);
  if (args?.markWidth > progressWidth) {
    nearState.nearToStart = true;
  } else if (args?.markWidth + progressWidth > args.containerWidth) {
    nearState.nearToEnd = true;
  }
  return nearState;
};

export const MatchStatusSliderMark = ({
  progressPercent,
  name,
  isPlayerCurrentUser = false,
  containerRect,
  income,
}: Props) => {
  //
  const {containerRef: markRef, rect: markRect} = useElementRect({
    recalculateCondition: name,
  });
  const theme = useTheme();
  const color = isPlayerCurrentUser
    ? theme.palette.primary.main
    : theme.palette.text.secondary;
  //
  const getXPosition = () => {
    const nearState = isNear({
      markWidth: (markRect?.width ?? 1) + 32,
      containerWidth: containerRect?.width,
      progressPercent,
    });

    const rtlb = {
      right: 'unset',
      left: 'unset',
      bottom: isPlayerCurrentUser ? '0.5rem' : 'unset',
      top: !isPlayerCurrentUser ? '0.5rem' : 'unset',
    };

    if (nearState.nearToStart) rtlb.left = '2.25rem';
    else if (nearState.nearToEnd) rtlb.right = '2.25rem';
    else {
      if (isPlayerCurrentUser) rtlb.right = '2.5rem';
      else rtlb.left = '2.5rem';
    }
    return rtlb;
  };
  //
  return (
    <>
      <Grid
        size="auto"
        spacing={2}
        sx={{
          transition: '0.2s',
          marginInlineStart: `calc(${progressPercent}% - 1rem)`,
          position: 'relative',
          height: '2.5rem',
        }}>
        <Box
          sx={{
            ...flex().column().acenter().result,
            flexDirection: isPlayerCurrentUser ? 'column' : 'column-reverse',
          }}>
          <Box
            ref={markRef}
            sx={{
              ...flex().column().astart().jcenter().result,
              ...getXPosition(),
              position: 'absolute',
              transition: '0.2s',
              maxWidth: '4rem',
            }}>
            <Typography
              variant="caption"
              sx={{
                color,
                fontWeight: '600',
                overflow: 'hidden',
                textWrap: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}>
              {name}
            </Typography>
            {income !== undefined && (
              <Typography
                variant="overline"
                color={income > 0 ? 'success' : 'error'}
                sx={{
                  fontWeight: '700',
                  lineHeight: '11px',
                }}>
                {income > 0 ? '+' : ''}
                {income}
              </Typography>
            )}
          </Box>
          <Avatar
            src={fakeAvatar}
            sx={{
              width: '2rem',
              height: '2rem',
              border: `1px solid ${color}`,
            }}
          />
          <Box
            sx={{
              height: '0.5rem',
              borderLeft: `2px solid ${color}`,
            }}
          />
        </Box>
      </Grid>
    </>
  );
};
