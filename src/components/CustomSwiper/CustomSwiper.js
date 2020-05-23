import React from "react";
import Swiper from "react-id-swiper";
import classes from "./CustomSwiper.module.css";
import SwiperSlide from "./Slide/SwiperSlide";

const CustomSwiper = () => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Swiper {...params} containerClass="swiper-container">
      <div>
        <SwiperSlide
          src={require("../../assets/images/MoviesAPP.jpg")}
          imageStyleType={classes.ImageSwiperLowWidth}
          title="THE MOVIE DB APPLICATION"
          subtitle="REACT-NATIVE"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch"
          href="https://github.com/setamyDG/moviesApp"
        />
      </div>
      <div>
        <SwiperSlide
          src={require("../../assets/images/CurrencyAPP.jpg")}
          imageStyleType={classes.ImageSwiperLowWidth}
          title="CURRENCY RATERS APPLICATION"
          subtitle="REACT-NATIVE"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch"
          href="https://github.com/setamyDG/CurrencyRates"
        />
      </div>
      <div>
        <SwiperSlide
          src={require("../../assets/images/fitbookAPP.jpg")}
          imageStyleType={classes.ImageSwiperLowHeight}
          title="FITBOOK"
          subtitle="REACT-NATIVE"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch"
          href="https://github.com/setamyDG/react-native-testFitbook"
        />
      </div>
      <div>
        <SwiperSlide
          src={require("../../assets/images/iplantsAPP.jpg")}
          imageStyleType={classes.ImageSwiperLowHeight}
          title="IPLANTS APPLICATION / (UNIVERSITY PROJECT)"
          subtitle="REACT-NATIVE"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch"
          href="https://github.com/setamyDG/ipApp"
        />
      </div>
      <div>
        <SwiperSlide
          src={require("../../assets/images/unityAPP.png")}
          imageStyleType={classes.ImageSwiperLowHeight}
          title="UNITY GAME / APPLICATION"
          subtitle="C# / UNITY 3D"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch"
        />
      </div>
    </Swiper>
  );
};

export default CustomSwiper;
