import * as React from 'react';
import Grid from '@mui/material/Grid2';

import ProfileImage from './ProfileImage';

import {theme} from '@/config/theme';

type ProfileImageStackProps = {
  images: Array<{src: string; alt: string}>;
};

const ProfileImageStack: React.FC<ProfileImageStackProps> = ({images}) => (
  <Grid container component="section" alignItems="flex-start">
    {images.map((image, index) => (
      <Grid key={index}>
        <ProfileImage
          itemIndex={index}
          src={image.src}
          alt={image.alt}
          marginTop={index > 0 ? theme.spacing(0.5) : '0'}
        />
      </Grid>
    ))}
  </Grid>
);

export default ProfileImageStack;
