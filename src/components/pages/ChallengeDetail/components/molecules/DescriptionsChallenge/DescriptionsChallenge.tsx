import {Typography} from '@mui/material';

type DescriptionsChallengeProps = {
  description: string;
};

const DescriptionsChallenge = ({description}: DescriptionsChallengeProps) => (
  <Typography
    color={'text.secondary'}
    sx={{
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
      letterSpacing: '0.048px',
    }}>
    {description}
  </Typography>
);
export default DescriptionsChallenge;
