import Grid from '@mui/material/Grid2';

type Props = {
  image: string;
};

const UserImage: React.FC<Props> = ({image}) => (
  <Grid container alignItems={'flex-end'} spacing={2}>
    <Grid
      sx={{
        height: '252px',
        width: '100%',
        border: '2px solid rgba(243, 199, 59, 1)',
        borderRadius: '10px',
        img: {
          borderRadius: '10px',
          width: '100%',
          height: '100%',
        },
      }}>
      <img src={image} alt={'Mohammad'} />
    </Grid>
  </Grid>
);

export default UserImage;
