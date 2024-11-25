import {Box, Icon, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type Props = {
  img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  title: string;
  value: string;
  subValue?: string;
};
const TitleValueInfo = ({img, title, value, subValue}: Props) => (
  <Grid sx={{display: 'flex', alignItems: 'center'}} size={12}>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Icon component={img} sx={{fontSize: '15px'}} />
      <Typography
        variant="caption"
        component={'span'}
        ml={'0.5rem'}
        color="primary">
        {title}
      </Typography>
    </Box>
    <Box>
      <Typography marginInlineStart={'4px'} component={'span'} variant="h6">
        {value}
      </Typography>
      {subValue && (
        <Typography
          variant="h6"
          component={'span'}
          pl={0.5}
          sx={{color: theme => theme.palette.text.secondary}}>
          {subValue}
        </Typography>
      )}
    </Box>
  </Grid>
);

export default TitleValueInfo;
