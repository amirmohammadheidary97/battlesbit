import {useState} from 'react';
import {Box} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';

import {DoubleButtonSwitch} from './DoubleButtonSwitch';

const meta: Meta<typeof DoubleButtonSwitch> = {
  component: DoubleButtonSwitch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DoubleButtonSwitch>;

type Option = {
  label: string;
  value: number;
};

const options: [Option, Option] = [
  {
    label: '7 min',
    value: 7 * 60 * 1000,
  },
  {
    label: '30 min',
    value: 30 * 60 * 1000,
  },
];

export const ChallengeOptionsStory: Story = {
  render: () => {
    //
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
    //
    return (
      <Box
        width="400px"
        sx={{
          '.MuiButtonGroup-root': {
            width: '100%',
          },
        }}>
        <DoubleButtonSwitch
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          getLabel={op => op.label}
          getValue={op => op.value}
        />
      </Box>
    );
  },
};
