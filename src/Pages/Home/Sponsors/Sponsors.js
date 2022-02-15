import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Title from "../../Shared/Title/Title";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("./sponsors.json")
      .then((res) => res.json())
      .then((data) => setSponsors(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20">
      <Title>Our Sponsors</Title>
      <Slider {...settings}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.id}>
            <img className="w-full h-auto" src={sponsor.src} alt="" />
            <h4 className="text-center">{sponsor.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
