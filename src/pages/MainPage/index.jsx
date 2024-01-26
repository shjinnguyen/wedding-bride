import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ScrollToTop from "react-scroll-to-top";
import ArrowTopIcon from "../../components/icon/ArrowTopIcon";
import WelcomePage from "../WelcomePage";
import StoryPage from "../StoryPage";
import ImageSlider from "../../components/ImageSlider";
import WeddingInfoDetailPage from "../WeddingInfoDetailPage";
import MapPage from "../MapPage";
import ThankYouPage from "../ThankYouPage";

import "./styles.scss";

const MainPage = () => {
  return (
    <div className="custom-parallex-wrapper">
      <ParallaxProvider>
        <Parallax speed={-10} className="parallax-image-top-wrapper">
          <div className="parallax-image"></div>
        </Parallax>
        <div className="content-wrapper">
          <ScrollToTop
            smooth
            color="#6f00ff"
            component={<ArrowTopIcon />}
            className="button-move-to-top"
            scale={(1, 1)}
          />
          <WelcomePage />
          <StoryPage />
          <ImageSlider />
          <WeddingInfoDetailPage />
          <MapPage />
          <ThankYouPage />
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default MainPage;
