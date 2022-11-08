import React from "react";
import Carousel from "better-react-carousel";

function PhotoCarusel() {
  return (
    <Carousel.Item>
      <div className="p-0 m-0 w-full flex justify-center">
        <img
          className=" max-h-[500px]  "
          alt="carousel "
          src="https://cdn.propertyhub.in.th/pictures/202209/20220924/1ABKQ8UngnhtLCV8w4S9/be7210af.jpg"
        />
      </div>
    </Carousel.Item>
  );
}

export default PhotoCarusel;
