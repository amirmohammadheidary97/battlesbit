import {useState} from 'react';
import {Box, Button, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {useMatchState} from '../../state/match.state';

import type {matchFinishModalType} from './MatchFinishModal';
import {MatchFinishModal} from './MatchFinishModal';

const meta: Meta<typeof MatchFinishModal> = {
  component: MatchFinishModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MatchFinishModal>;

export const MatchFinishModalStory: Story = {
  render: () => {
    const theme = useTheme();
    const [matchFinishModalType, set] = useState<matchFinishModalType>();
    const {setMatchState} = useMatchState();
    const onOpenLoose = () => {
      setMatchState('loose');
      set('loose');
    };
    const onOpenWin = () => {
      setMatchState('win');
      set('win');
    };
    const onOpenAchievement = () => {
      setMatchState('win');
      set('new-achievment');
    };
    const onOpenLevelup = () => {
      setMatchState('win');
      set('level-up');
    };

    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={5}
        p={2}
        bgcolor={theme.palette.background.default}
        maxWidth={'768px'}>
        <Button onClick={onOpenWin} variant="contained" color="primary">
          Win
        </Button>
        <Button onClick={onOpenLoose} variant="contained" color="primary">
          Loose
        </Button>
        <Button onClick={onOpenAchievement} variant="contained" color="primary">
          new achievement
        </Button>
        <Button onClick={onOpenLevelup} variant="contained" color="primary">
          levelup
        </Button>
        {matchFinishModalType && (
          <MatchFinishModal matchFinishModalType={matchFinishModalType} />
        )}
      </Box>
    );
  },
};
