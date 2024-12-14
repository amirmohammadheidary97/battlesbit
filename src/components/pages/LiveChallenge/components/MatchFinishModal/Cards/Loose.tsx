import {Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

// import LooserPanda from '@/assets/img/bg/looser-panda.png';
import LooserPandaBg from '@/assets/img/bg/looser-panda-bg.png';
import MD from '@/assets/img/bg/middle-finger.png';
import {theme} from '@/config/theme';

const LooseCard = () => (
  <>
    {/* Image */}
    <Grid
      size={11}
      offset={0.5}
      sx={{
        height: '38.7323944vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative',
        img: {
          maxHeight: '100%',
          maxWidth: '100%',
          position: 'absolute',
          bottom: 0,
          mb: -1.5,
          ':first-of-type': {
            zIndex: 1,
            mb: -6,
          },
          ':last-child': {
            zIndex: 2,
            // height: '250px'
          },
        },
      }}>
      <img src={LooserPandaBg} alt="looser-pani-bg" />
      <img src={MD} alt="looser-pani" />
    </Grid>
    {/* Card */}
    <Grid
      container
      size={12}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        p: 2,
        zIndex: 2,
      }}>
      <Grid size={12}>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {/* Great Job! */}
          Fuckin Looser!
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sedconsectetur adipiscing elit.
        </Typography>
      </Grid>
      <Grid size={12} mt={3}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{height: '3rem'}}>
          Next
        </Button>
      </Grid>
    </Grid>
  </>
);

export default LooseCard;
