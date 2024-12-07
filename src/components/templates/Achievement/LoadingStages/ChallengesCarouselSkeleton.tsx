import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

import ChallengesCarouselCardSkeleton from './ChallengesCarouselCard';

import {flex} from '@/utils/flexHelper';

const ChallengesCarouselSkeleton = () => (
  <Grid
    container
    size={12}
    spacing={'0.5rem'}
    sx={{
      '.swiper': {
        width: 1,
        height: 1,
        overflow: 'visible',
      },
      '.swiper-slide': {
        ...flex().jcenter().acenter().result,
        width: '90vw',
      },
    }}>
    <Typography variant="subtitle1" px={2}>
      {' '}
      challenges
    </Typography>
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={10}
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper">
      {[...Array(5)].map(
        (
          _,
          i, // Placeholder for 5 items, adjust as needed
        ) => (
          <SwiperSlide key={i}>
            <ChallengesCarouselCardSkeleton />
          </SwiperSlide>
        ),
      )}
    </Swiper>
  </Grid>
);

export default ChallengesCarouselSkeleton;
