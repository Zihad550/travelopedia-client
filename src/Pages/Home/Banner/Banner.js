import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../../images/banners/banner-1.jpg";
import img2 from "../../../images/banners/banner-2.jpg";
import img3 from "../../../images/banners/banner-3.jpg";
import img4 from "../../../images/banners/banner-4.jpg";
import "./Banner.css";

const Banner = () => {
  // banner data
  const banners = [
    {
      id: 1,
      src: img1,
      title: "Chicago",
    },
    {
      id: 2,
      src: img2,
      title: "Paris",
    },
    {
      id: 3,
      src: img3,
      title: "London",
    },
    {
      id: 4,
      src: img4,
      title: "Moscow",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {banners.map((banner) => (
        <div key={banner.id} className="banner">
          <div
            className="w-screen h-full "
            style={{
              backgroundColor: "rgb(220 220 220 / 49%)",
              backgroundImage: `url('${banner.src}')`,
              backgroundBlendMode: "overlay",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="z-10 text-center pt-56 md:text-8xl text-7xl">
              {banner.title}
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
