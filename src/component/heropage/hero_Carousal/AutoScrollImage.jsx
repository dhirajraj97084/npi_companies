
import { Carousel } from "@material-tailwind/react";

export default function AutoScrollImage() {
  return (
    <div className="">
      <Carousel
        loop={true}
        autoplay={true}
        navigation={false}
        transition={{ type: "tween", duration: 2 }}
        autoplayDelay={5000}
        className=" "
      >
        <div className="relative h-full ">
          <img src="images/1stimg.png" alt="image 1" className=" " />
        </div>

        <div className="relative h-full">
          <img src="images/2ndimg.png" alt="image 2" className=" " />
        </div>

        <div className="relative h-full">
          <img src="images/3rdimg.png" alt="image 3" className="  " />
        </div>
      </Carousel>
    </div>
  );
}
