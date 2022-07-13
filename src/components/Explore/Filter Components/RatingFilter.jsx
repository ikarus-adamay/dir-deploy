import React, { useState } from "react";
import { AiOutlineCaretDown, AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingFilter = () => {
  const [isDisplayRating, setIsDisplayRating] = useState(false);

  return (
    <div className="drop-shadow-lg border-grey-500 bg-white rounded-md mt-6">
      {/* Categories Heading */}
      <div
        className="flex justify-between  p-2 text-lg hover:cursor-pointer"
        onClick={() => setIsDisplayRating(!isDisplayRating)}
      >
        <p>Ratings</p>
        <button>
          <AiOutlineCaretDown className="text-blue my-0.5 hover:scale-150 mr-1.5" />
        </button>
      </div>
      {/* Categories */}
      <div
        className={`flex flex-col pb-4 ${isDisplayRating ? null : "hidden"}`}
      >
        <label
          htmlFor="isFiveStar"
          onClick="selectAll(document.wizard_form, this);"
          className="flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isFiveStar"
            name="isFiveStar"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          <div className="flex">
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
          </div>
        </label>

        <label
          htmlFor="isFourStar"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isFourStar"
            name="isFourStar"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          <div className="flex">
            <div className="flex">
              <AiFillStar className="text-blue" />
              <AiFillStar className="text-blue" />
              <AiFillStar className="text-blue" />
              <AiFillStar className="text-blue" />
              <AiOutlineStar className="text-blue" />
            </div>
          </div>
        </label>

        <label
          htmlFor="isThreeStar"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isThreeStar"
            name="isThreeStar"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          <div className="flex">
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
          </div>
        </label>

        <label
          htmlFor="isTwoStar"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isTwoStar"
            name="isTwoStar"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          <div className="flex">
            <AiFillStar className="text-blue" />
            <AiFillStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
          </div>
        </label>

        <label
          htmlFor="isOneStar"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isOneStar"
            name="isOneStar"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          <div className="flex">
            <AiFillStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
            <AiOutlineStar className="text-blue" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default RatingFilter;
