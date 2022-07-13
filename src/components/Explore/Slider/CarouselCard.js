import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img1 from "../../../Assets/img1.png";
import img2 from "../../../Assets/img2.png";
import img3 from "../../../Assets/img3.png";
import img4 from "../../../Assets/img4.png";
import bg from "../../../Assets/bg.png";
import data from "../../../data.json";
import { FaStar } from "react-icons/fa";

const CarouselCard = () => {
  let style1 = { backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" };

  return (
    <>
      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={12}
        visibleSlides={4}
        step={1}
        infinite={true}
        interval={2000}
        isPlaying={true}
      >
        <ButtonBack
          role="button"
          aria-label="slide backward"
          className="absolute z-30 h-10 w-10 left-0 ml-40 mt-40 cursor-pointer rounded-full bg-gray-400 opacity-50"
          id="prev"
        >
          <svg
            className="ml-4"
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonBack>
        <div className="w-full relative flex items-center justify-center">
          <div className="w-[1260px] h-full mx-auto overflow-x-hidden overflow-y-hidden font-poppins">
            <Slider>
              <div
                id="slider"
                className="h-full w-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                {data.map((asset) => {
                  return (
                    <Slide index={asset.id}>
                      <div className="h-full w-72 bg-white shadow-sm font-poppins rounded-lg flex flex-shrink-0">
                        <div className="h-96 w-64 relative cursor-pointer">
                          <div className="relative inset-0 transform hover:scale-110 transition duration-1000">
                            <img
                              className="h-72 w-full rounded-lg mx-4 mt-4"
                              src={asset.image}
                              alt="product"
                            />
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="grid items-center ml-5">
                              <div className="flex items-center">
                                <h5 className="text-md font-normal tracking-tight text-gray-500">
                                  {asset.author}
                                </h5>
                              </div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-medium tracking-tight text-black">
                                  {asset.name}
                                </h3>
                              </div>
                            </div>
                            <div className="flex items-center mt-6">
                              <FaStar className="text-yellow" />
                              <span className="text-gray-600 text-xl font-semibold">
                                {asset.ratingAvg}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  );
                })}
              </div>
            </Slider>
          </div>
        </div>
        <ButtonNext
          role="button"
          aria-label="slide forward"
          className="absolute z-30 h-10 w-10 right-0 mr-40 top-[565px] cursor-pointer rounded-full bg-gray-400 opacity-50"
          id="next"
        >
          <svg
            className="ml-4"
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonNext>
      </CarouselProvider>

      {/* Carousel for tablet and medium size devices */}
      <CarouselProvider
        className="lg:hidden md:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={12}
        visibleSlides={2}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-8  cursor-pointer"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                <Slide index={0}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img1}
                      alt="black chair and white table"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img2}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img3}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img4}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img3}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img2}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img3}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img4}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img1}
                      alt="black chair and white table"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                        Catalog 2
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img2}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img3}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img4}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-8 "
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>

      {/* Carousel for mobile and Small size Devices */}
      <CarouselProvider
        className="block md:hidden "
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={12}
        visibleSlides={1}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-8  cursor-pointer"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
              >
                <Slide index={0}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img1}
                      alt="black chair and white table"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img2}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img3}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img4}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img3}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img2}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={6}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img3}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={7}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img4}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={8}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img1}
                      alt="black chair and white table"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                        Catalog 2
                      </h2>
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={9}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <div className="w-full" style={style1}>
                      <img
                        src={img2}
                        alt="black chair and white table"
                        className="mt-6 object-center w-60 rounded-2xl pt-3"
                      />
                    </div>
                    <div className="absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h5 className="text-xl lg:text-xl font-light leading-5 lg:leading-6 text-gray-800">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={10}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img3}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={11}>
                  <div className="flex flex-shrink-0 relative h-96 w-full sm:w-auto">
                    <img
                      src={img4}
                      alt="sitting area"
                      className="object-cover object-center w-full"
                    />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                      <div className="flex h-full items-end pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          artist
                        </h3>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-8 "
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
};

export default CarouselCard;
