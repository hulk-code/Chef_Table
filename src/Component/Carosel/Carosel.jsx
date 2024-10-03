import React from 'react';
import manu1 from "../../assets/carosel/setManu1.jpg";
import manu2 from "../../assets/carosel/setManu2.jpeg";
import manu3 from "../../assets/carosel/setManu3.jpg";
import manu4 from "../../assets/carosel/setManu4.jpg";

const Carousel = () => {
    return (
        <div className=''>
            <div>
                <h1 className='text-5xl font-bold text-center m-10 '>Our Populer Set Manu's</h1>
            </div>
            <div className="carousel w-full h-auto">
    <div id="slide1" className="carousel-item relative w-full h-1/2">
    <img
      src={manu4}
      className="w-full h-96" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full h-1/2">
    <img
      src={manu2}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-1/2">
    <img
      src={manu3}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full h-1/2">
    <img
      src={manu1}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Carousel;
