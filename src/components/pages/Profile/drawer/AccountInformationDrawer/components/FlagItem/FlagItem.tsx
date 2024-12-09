import {Checkbox, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  title: string;
  id: number;
  iconUrl: string;
  languageType: number;
  handleSetLanguageType: (type: number) => void;
};

const FlagItem: React.FC<Props> = ({
  title,
  iconUrl,
  id,
  languageType,
  handleSetLanguageType,
}) => (
  <Grid
    onClick={() => handleSetLanguageType(id)}
    sx={{
      backgroundColor:
        languageType == id ? 'rgba(243, 199, 59, 0.2)' : 'background.default',
      borderRadius: '12px',
    }}
    size={12}
    mb={2}
    p={1}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'space-between'}>
    <Grid container alignItems={'center'} spacing={2}>
      <Grid
        sx={{
          height: '32px',
          width: '32px',
          img: {
            borderRadius: '50%',
            width: '100%',
            height: '100%',
          },
        }}>
        <img src={iconUrl} alt={title} />
      </Grid>
      <Typography
        variant="body1"
        fontWeight="400"
        fontSize="16px"
        lineHeight="20px"
        fontFamily="Nunito Sans"
        color={'text.white'}>
        {title}
      </Typography>
    </Grid>
    <Grid>
      {languageType == id && (
        <Checkbox sx={{padding: '0 5px 0 0'}} color="primary" checked />
      )}
    </Grid>
  </Grid>
);

export default FlagItem;
