import Grid from "@mui/material/Grid2";
import ChallengesCarouselCard from "./ChallengesCarouselCard";
import { Typography } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { flex } from "@/utils/flexHelper";
import { ChallengesCards } from "../../fakeData/fake";
import AchieveCup from "@/assets/img/icons/general/achieveCup.svg?react";
import "swiper/css";

const ChallengesCarousel = () => (
  <Grid
    container
    size={12}
    spacing={'0.5rem'}
    sx={{
      ".swiper": {
        width: 1,
        height: 1,
        overflow: "visible",
      },
      ".swiper-slide": {
        ...flex().jcenter().acenter().result,
        width: "90vw",
      },
    }}
  >
    <Typography variant="subtitle1" px={2}>
      {" "}
      challenges
    </Typography>
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={10}
      loop
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {ChallengesCards.map((ch, i) => (
        <SwiperSlide>
          <ChallengesCarouselCard
            key={i}
            caption={ch.caption}
            desc={ch.desc}
            icon={AchieveCup}
            progress={ch.progress}
            title={ch.title}
            total={ch.total}
            time={ch.time}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Grid>
);

export default ChallengesCarousel;
