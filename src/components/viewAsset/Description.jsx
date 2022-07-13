import React, { useState } from "react";
import { AiFillFileUnknown } from "react-icons/ai";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import img from "../../Assets/User1.png";
import StarRatings from "react-star-ratings";

const Description = () => {
  const [descDisplay, setDescDisplay] = useState("description");
  const commentRating = parseInt(3);
  return (
    <div className="text-grey-700 font-poppins">
      <div className="grid grid-cols-5 h-12 cursor-pointer">
        <div
          className={`p-1 text-xl text-center pt-2 font-bold ${
            descDisplay === "description"
              ? "bg-white text-blue underline underline-offset-2"
              : null
          }`}
          onClick={() => setDescDisplay("description")}
        >
          Description
        </div>
        <div
          className={`p-1 text-xl text-center pt-2 font-bold ${
            descDisplay === "details"
              ? "bg-white text-blue underline underline-offset-2"
              : null
          }`}
          onClick={() => setDescDisplay("details")}
        >
          Details
        </div>
        <div
          className={`p-1 text-xl text-center pt-2 font-bold ${
            descDisplay === "printTime"
              ? "bg-white text-blue underline underline-offset-2"
              : null
          }`}
          onClick={() => setDescDisplay("printTime")}
        >
          Print Time
        </div>
        <div
          className={`p-1 text-xl text-center pt-2 font-bold ${
            descDisplay === "parts"
              ? "bg-white text-blue underline underline-offset-2"
              : null
          }`}
          onClick={() => setDescDisplay("parts")}
        >
          Parts
        </div>
        <div
          className={`p-1 text-xl text-center pt-2 font-bold ${
            descDisplay === "reviews"
              ? "bg-white text-blue underline underline-offset-2"
              : null
          }`}
          onClick={() => setDescDisplay("reviews")}
        >
          Reviews
        </div>
      </div>
      <div>
        <div
          className={`p-7 bg-white py-16 text-lg ${
            descDisplay === "description" ? null : "hidden"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            modiodio quae omnis ducimus officia. Veritatis modi odio quae omnis
            ducimus officia. dolor sit amet consectetur adipisicingdolor sit
          </p>
          <br />
          <p>
            amet consectetur adipisicing elit. Deleniti in eaque repellat quis,
            veniam magnam voluptatem? Neque non dolor illo! Amet consectetur
            adipisicing elit. Deleniti in eaque repellat quis, veniam magnam
            voluptatem? Neque non dolor illo
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            ipsum voluptatem suscipit dicta aspernatur numquam quod officia amet
            id tenetur!
          </p>
        </div>
        <div
          className={` p-7 bg-white pt-16 pb-8 text-lg  ${
            descDisplay === "details" ? null : "hidden"
          }`}
        >
          <div className="flex flex-col">
            <div className="flex justify-between p-1">
              <p className="font-bold">Published</p>
              <p>3 years ago</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Lifetime Sale</p>
              <p>52</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">File Size</p>
              <p>123 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Scale</p>
              <p>x:124 y:222 z: 909</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Geometry</p>
              <div className="flex flex-col ">
                <div className="flex justify-end">
                  <p>Triangles:</p>
                  <p className=" font-bold pl-2 ">11.4k</p>
                </div>
                <div className="flex justify-end">
                  <p>Quads:</p>
                  <p className=" font-bold pl-2">4.3k</p>
                </div>
                <div className="flex justify-end">
                  <p>Polygons:</p>
                  <p className=" font-bold pl-2">43</p>
                </div>
                <div className="flex justify-end">
                  <p>Total Triangles:</p>
                  <p className=" font-bold pl-2">21.6k</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Included Files</p>
              <div className="flex">
                <div>
                  <div className="bg-grey-200 rounded-sm mx-1 p-1 flex">
                    <AiFillFileUnknown className="text-xl" />
                    <p className="font-bold">.obj</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-grey-200 rounded-sm ml-1 p-1 flex">
                    <AiFillFileUnknown className="text-xl" />
                    <p className="font-bold">.stl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` p-7 bg-white pt-16 text-lg ${
            descDisplay === "printTime" ? null : "hidden"
          }`}
        >
          <div className="flex flex-col text-grey-700  font-poppins">
            <div className="text-base">
              <div className="flex justify-between">
                <p className="text-2xl  font-bold">Total Print Time</p>
                <p className="text-2xl  font-bold">20hrs 34mins</p>
              </div>

              <div className="flex flex-col border-2  border-grey-400 mt-3 rounded-lg">
                <p className="text-xl mx-0.5 p-2 font-bold">
                  Standard Settings
                </p>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Printer</p>
                  <p>Ultimaker 5</p>
                </div>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Material</p>
                  <p>PLA</p>
                </div>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Print Core</p>
                  <p>AA 0.4</p>
                </div>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Profile</p>
                  <p>Fine-0.1mm</p>
                </div>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Infill</p>
                  <p>20%</p>
                </div>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Support</p>
                  <p className="text-2xl">
                    <BsToggleOff />
                  </p>
                </div>
                <div className=" flex justify-between p-3">
                  <p className="font-bold">Adhesion</p>
                  <p className="text-2xl">
                    <BsToggleOn />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` p-7 bg-white py-16 ${
            descDisplay === "parts" ? null : "hidden"
          }`}
        >
          <div className="flex flex-col text-lg">
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 1</p>
              <p>200 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 2</p>
              <p>25 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 3</p>
              <p>30 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 4</p>
              <p>150 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 5</p>
              <p>10 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 6</p>
              <p>30 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 7</p>
              <p>15 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 8</p>
              <p>20 MB</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-bold">Asset File 9</p>
              <p>100 MB</p>
            </div>
          </div>
        </div>
        <div
          className={` p-7 bg-white pt-16 pb-8 text-lg  ${
            descDisplay === "reviews" ? null : "hidden"
          }`}
        >
          <div>
            <div className="flex flex-col">
              <div className="flex ">
                <img className="h-14 w-14 self-center" src={img} alt="" />
                <div className="flex flex-col mx-3">
                  <p className="text-lg font-bold"> User1234 </p>
                  <div className="absolute translate-y-5">
                    <StarRatings
                      starRatedColor="#1a77bf"
                      rating={commentRating}
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </div>
                  <p className="mt-4 ">
                    Donec sed sed feugiat sit. Enim, urna euismod magna enim.
                    Sit cras e id sagittis consequat at.
                  </p>
                  <div className="flex">
                    <a href className="text-blue text-base pr-3">
                      Like
                    </a>
                    <span className="text-black">&#183;</span>
                    <a href className="text-blue text-base px-3">
                      Reply
                    </a>
                    <span className="text-black">&#183;</span>
                    <p className="text-blue text-base pl-3">23h</p>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <img className="h-14 w-14 self-center" src={img} alt="" />
                <div className="flex flex-col mx-3">
                  <p className="text-lg font-bold"> User1234 </p>
                  <div className="absolute translate-y-5">
                    <StarRatings
                      starRatedColor="#1a77bf"
                      rating={commentRating}
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </div>
                  <p className="mt-4 ">
                    Donec sed sed feugiat sit. Enim, urna euismod magna enim.
                    Sit cras e id sagittis consequat at.
                  </p>
                  <div className="flex">
                    <a href className="text-blue text-base pr-3">
                      Like
                    </a>
                    <span className="text-black">&#183;</span>
                    <a href className="text-blue text-base px-3">
                      Reply
                    </a>
                    <span className="text-black">&#183;</span>
                    <p className="text-blue text-base pl-3">23h</p>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <img className="h-14 w-14 self-center" src={img} alt="" />
                <div className="flex flex-col mx-3">
                  <p className="text-lg font-bold"> User1234 </p>
                  <div className="absolute translate-y-5">
                    <StarRatings
                      starRatedColor="#1a77bf"
                      rating={commentRating}
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </div>
                  <p className="mt-4 ">
                    Donec sed sed feugiat sit. Enim, urna euismod magna enim.
                    Sit cras e id sagittis consequat at.
                  </p>
                  <div className="flex">
                    <a href className="text-blue text-base pr-3">
                      Like
                    </a>
                    <span className="text-black">&#183;</span>
                    <a href className="text-blue text-base px-3">
                      Reply
                    </a>
                    <span className="text-black">&#183;</span>
                    <p className="text-blue text-base pl-3">23h</p>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <img className="h-14 w-14 self-center" src={img} alt="" />
                <div className="flex flex-col mx-3">
                  <p className="text-lg font-bold"> User1234 </p>
                  <div className="absolute translate-y-5">
                    <StarRatings
                      starRatedColor="#1a77bf"
                      rating={commentRating}
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </div>
                  <p className="mt-4 ">
                    Donec sed sed feugiat sit. Enim, urna euismod magna enim.
                    Sit cras e id sagittis consequat at.
                  </p>
                  <div className="flex">
                    <a href className="text-blue text-base pr-3">
                      Like
                    </a>
                    <span className="text-black">&#183;</span>
                    <a href className="text-blue text-base px-3">
                      Reply
                    </a>
                    <span className="text-black">&#183;</span>
                    <p className="text-blue text-base pl-3">23h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 justify-center">
              <img className="h-20 w-20 p-2" src={img} alt="" />
              <div className="border-2 pb-3 rounded-lg border-grey-300 px-3">
                <form action="">
                  <textarea
                    className="my-2 outline-grey-300"
                    id="newReview"
                    name="newReview"
                    rows="4"
                    cols="50"
                    placeholder="  Add a comment..."
                  ></textarea>
                  <br />
                  <div className="flex justify-end">
                    <input
                      className="rounded-lg bg-blue text-white py-1 px-3"
                      type="submit"
                      value="Submit"
                      onClick={(e) => e.preventDefault()}
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
