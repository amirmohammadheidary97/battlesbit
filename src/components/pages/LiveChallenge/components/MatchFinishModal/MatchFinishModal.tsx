import { lazy, Suspense } from 'react';
import { useWindowSize } from 'react-use';
import { Modal } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { useMatchState } from '../../state/match.state';

import { looseAnimation, winAnimation } from './animations';

const WinCard = lazy(() => import('./Cards/Win'));
const LooseCard = lazy(() => import('./Cards/Loose'));
const NewAchievementCard = lazy(() => import('./Cards/NewAchievement'));
const LevelUpCard = lazy(() => import('./Cards/LevelUp'));

export type matchFinishModalType =
  | 'win'
  | 'loose'
  | 'new-achievment'
  | 'level-up';
type Props = {
  matchFinishModalType: matchFinishModalType;
};

export const MatchFinishModal = ({ matchFinishModalType }: Props) => {
  const { stage } = useMatchState();
  const { width } = useWindowSize();
  const isOpen = () => {
    if (matchFinishModalType === 'win' && stage === 'win') return true;
    if (matchFinishModalType === 'loose' && stage === 'loose') return true;
    if (matchFinishModalType === 'new-achievment' && stage === 'win')
      return true;
    if (matchFinishModalType === 'level-up' && stage === 'win') return true;
    return false;
  };

  return (
    <Modal open={isOpen()} onClose={() => { }}>
      <Grid
        container
        size={12}
        spacing={0}
        sx={{
          position: 'absolute',
          maxWidth: `calc(768px - 2rem)`,
          mx: 'auto',
          top: '0%',
          left: width <= 768 ? '0%' : (width - 768) / 2 + 'px',
          height: '100vh',
          p: 2,
          pb: '25vh',
          transformOrigin: 'center',
          animation: `${matchFinishModalType === 'loose' ? looseAnimation() : winAnimation()} ${matchFinishModalType === 'loose' ? 2 : 1}s forwards`,
          alignContent: 'flex-end',
        }}>
        {matchFinishModalType === 'win' && (
          <Suspense fallback={<></>}>
            <WinCard />
          </Suspense>
        )}
        {matchFinishModalType === 'loose' && (
          <Suspense fallback={<></>}>
            <LooseCard />
          </Suspense>
        )}
        {matchFinishModalType === 'new-achievment' && (
          <Suspense fallback={<></>}>
            <NewAchievementCard />
          </Suspense>
        )}
        {matchFinishModalType === 'level-up' && (
          <Suspense fallback={<></>}>
            <LevelUpCard level={55} />
          </Suspense>
        )}
      </Grid>
    </Modal>
  );
};
