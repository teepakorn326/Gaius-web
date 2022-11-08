import React from "react";
import Carousel from "better-react-carousel";

const Gallery = (data) => {
  return (
    <Carousel
      loop
      cols={1}
      rows={1}
      gap={10}
      //   className="grid grid-cols-1 grids-rows-1 gap-10 justify-center items-center m-0 h-[100px] "
      containerStyle={{
        display: "flex",
        alignItems: "center",
        height: "500px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {data.data?.map((data) => (
        <Carousel.Item key={data.photoUrl}>
          <div className="p-0 m-0 w-full flex justify-center">
            <img
              className="max-w-fit max-h-[500px]  "
              alt="carousel "
              src={data.photoUrl}
            />
          </div>
        </Carousel.Item>
      ))}

      {/* <Carousel.Item> */}
      {/* anything you want to show in the grid */}
      {/* </Carousel.Item> */}
      {/* ... */}
    </Carousel>
  );
};

export default Gallery;
