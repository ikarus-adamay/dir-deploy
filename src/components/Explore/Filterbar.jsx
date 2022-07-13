import React, { useState } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
import CategoryFilter from "./Filter Components/CategoryFilter";
import TimeFilter from "./Filter Components/TimeFilter";
import LicencesFilter from "./Filter Components/LicencesFilter";
import RatingFilter from "./Filter Components/RatingFilter";
import PriceFilterElement from "./Filter Components/PriceFilterElement";
import "./Filter Components/styles.css";

const Filterbar = () => {
  const [isDisplayFilters, setIsDisplayFilters] = useState(true);

  return (
    <>
      <div className="sticky top-28 mt-2 pl-7">
        <div className="m-5 font-poppins text-grey-700 ">
          <div className=" drop-shadow-lg border-grey-500 mt-12 h-12 bg-white rounded-md">
            {/*Filter Heading*/}
            <div
              className="flex justify-between mx-2 my-1 font-poppins text-lg hover:cursor-pointer"
              onClick={() => setIsDisplayFilters(!isDisplayFilters)}
            >
              <p className="mt-2">Filters</p>
              <button className="hover:scale-125 mt-2">
                <BsFillFilterSquareFill className="text-blue my-auto hover:scale-110 mr-1.5" />
              </button>
            </div>
          </div>
          <div
            id="filter-scroll"
            className={`${isDisplayFilters ? "overflow-y-scroll h-160 mt-3 pr-3" : "hidden"
              }`}
          >
            {/*Filters, going to be drop down themselves. useState*/}
            {/* Filter: Categories*/}
            <CategoryFilter />
            {/* Price */}
            <PriceFilterElement />
            {/* Ratings */}
            <RatingFilter />
            {/* Time */}
            <div id="tooltipShadow">
              <TimeFilter />
            </div>
            {/* Licences */}
            <LicencesFilter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filterbar;
