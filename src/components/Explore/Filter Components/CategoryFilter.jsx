import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import data from "../../../data.json";

const CategoryFilter = () => {
  const [isDisplayCategories, setIsDisplayCategories] = useState(true);
  let Categories = [];

  data && data.map((item) => (
    item.Categories.map((category) => Categories.push(category))
  ));

  const categoriesWithoutAll = [...new Set(Categories)];
  const uniqueCategories = [...categoriesWithoutAll.sort()];

  console.log(uniqueCategories);
  return (
    <div className=" border-grey-500 bg-white mt-6 rounded-md drop-shadow-lg">
      {/* Categories Heading */}
      <div
        className="flex justify-between  p-2 text-lg hover:cursor-pointer"
        onClick={() => setIsDisplayCategories(!isDisplayCategories)}
      >
        <p>Categories</p>
        <button>
          <AiOutlineCaretDown className="text-blue my-0.5 hover:scale-150 mr-1.5" />
        </button>
      </div>
      {/* Categories */}
      <div
        className={`flex flex-col pb-4 ${isDisplayCategories ? null : "hidden"
          }`}
      >
        {uniqueCategories.map((category) => {
          return (
            <label
              htmlFor={`is${category}`}
              onClick="selectAll(document.wizard_form, this);"
              className=" flex  p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
            >
              <input
                type="checkbox"
                id={`is${category}`}
                name={`is${category}`}
                title="Select All"
                className="my-auto accent-blue mr-3"
              />
              {category}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
