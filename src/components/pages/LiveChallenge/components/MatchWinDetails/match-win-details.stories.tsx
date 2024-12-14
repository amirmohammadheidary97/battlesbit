import {Box, Button, useTheme} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {useMatchState} from '../../state/match.state';

import {MatchWinDetails} from './MatchWinDetails';

const meta: Meta<typeof MatchWinDetails> = {
  component: MatchWinDetails,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MatchWinDetails>;

export const MatchWinDetailsStory: Story = {
  render: () => {
    const theme = useTheme();
    const {setShowWinDetails} = useMatchState();
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        p={0}
        bgcolor={theme.palette.background.default}
        maxWidth={'768px'}>
        <Button
          onClick={() => {
            setShowWinDetails(true);
          }}>
          Show
        </Button>
        <MatchWinDetails />
      </Box>
    );
  },
};
