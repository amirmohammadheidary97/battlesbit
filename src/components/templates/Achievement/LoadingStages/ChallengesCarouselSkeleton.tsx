import {Skeleton, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import 'swiper/css';

import ChallengesCarouselCardSkeleton from './ChallengesCarouselCardSkeleton';

import {flex} from '@/utils/flexHelper';

const ChallengesCarouselSkeleton = () => (
  <Grid
    container
    size={12}
    spacing={'0.5rem'}
    px={2}
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
    <Typography variant="subtitle1">
      {' '}
      <Skeleton width={80} />
    </Typography>
    <ChallengesCarouselCardSkeleton />
    {/* <Swiper
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
    </Swiper> */}
  </Grid>
);

export default ChallengesCarouselSkeleton;
