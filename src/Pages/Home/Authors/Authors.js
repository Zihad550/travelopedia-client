import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch("./famousAuthors.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
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
          slidesToShow: 1,
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
    <div>
      <Slider {...settings}>
        {authors.map((author) => (
          <div className="flex flex-col justify-center " key={author.id}>
            <div className="w-32 h-32 mx-auto rounded-full border border-black">
              <img className="w-full h-full" src={author.src} alt="" />
            </div>
            <h4 className="text-center">{author.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Authors;
