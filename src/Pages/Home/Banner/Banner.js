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
      bg: "https://cdn.wallpapersafari.com/99/80/IpEkdW.jpg",
      title: "Healthy Fresh Fruits",
      offer: "15",
    },
    {
      id: 2,
      src: img2,
      bg: "https://img.freepik.com/free-photo/photographic-equipment-with-cellphone-gray-background_23-2147856088.jpg?size=626&ext=jpg",
      title: "Awesome Gadgets",
      offer: "20",
    },
    {
      id: 3,
      src: img3,
      bg: "https://wallpaperaccess.com/full/680075.jpg",
      title: "Running Shoes",
      offer: "30",
    },
    {
      id: 4,
      src: img4,
      bg: "https://wallpaperaccess.com/full/680075.jpg",
      title: "Running Shoes",
      offer: "30",
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
            {/* <h2 className="h-screen w-screen">hi</h2> */}
          </div>
          {/* <img className="w-full h-full" src={banner.src} alt="" /> */}
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
