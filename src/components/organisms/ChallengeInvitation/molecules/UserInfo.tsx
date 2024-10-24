import {Avatar, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

type UserInfoProps = {
  user: {
    name: string;
    level: number;
    avatar: string;
  };
};

export const UserInfo: React.FC<UserInfoProps> = ({user}) => (
  <Grid
    container
    alignItems="center"
    justifyContent="space-between"
    sx={{mb: 1}}>
    <Grid container alignItems="center" spacing={1}>
      <Grid>
        <Typography variant="caption" color="text.secondary">
          User:
        </Typography>
      </Grid>
      <Grid container alignItems="center" spacing={1}>
        <Grid>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{width: 26, height: 26}}
          />
        </Grid>
        <Grid>
          <Typography variant="body2">{user.name}</Typography>
        </Grid>
        <Grid>
          <Typography
            variant="caption"
            sx={{color: 'primary.main', fontWeight: 700}}>
            {user.level} LVL
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
