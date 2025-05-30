import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import backMainIcon from '@/assets/img/icons/general/back-main.svg';

type TSectionTitle = {
  title: string;
  link?: string;
  linkText?: string;
};

const SectionTitle = ({link, linkText = 'More', title}: TSectionTitle) => (
  <Grid
    size={12}
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'center'}>
    <Typography
      variant="subtitle2"
      fontWeight={400}
      fontSize={'14px'}
      sx={{
        lineHeight: '100%',
        letterSpacing: '0%',
      }}>
      {title}
    </Typography>
    {link && (
      <Link
        display={'flex'}
        alignItems={'center'}
        href={link}
        sx={{textDecoration: 'none'}}>
        <Grid display={'flex'} alignItems={'center'}>
          <Typography
            color="primary.main"
            variant="overline"
            fontWeight={500}
            fontSize={'10px'}
            mr={'2px'}
            lineHeight={'11px'}
            sx={{
              fontFamily: 'Geogrotesque Wide',
              textTransform: 'uppercase',
              letterSpacing: '0%',
            }}>
            {linkText}
          </Typography>
          <img src={backMainIcon} alt="backMain" />
        </Grid>
      </Link>
    )}
  </Grid>
);

export default SectionTitle;
