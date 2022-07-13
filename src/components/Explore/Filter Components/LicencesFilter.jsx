import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import data from "../../../data.json";

const LicencesFilter = () => {
  const [isDisplayLicence, setIsDisplayLicence] = useState(false);
  let licencesArray = [];

  data.map((asset) => (
    licencesArray.push(asset.license)
  ));

  const uniqueLicences = new Set(licencesArray);
  licencesArray = [...uniqueLicences];
  const sortedLicencesArray = licencesArray.sort();

  return (
    <div className="drop-shadow-lg border-grey-500 h-32x  bg-white mt-6 rounded-md mb-3">
      {/* Categories Heading */}
      <div
        className="flex justify-between  p-2 text-lg hover:cursor-pointer"
        onClick={() => setIsDisplayLicence(!isDisplayLicence)}
      >
        <p>Licence Types</p>
        <button>
          <AiOutlineCaretDown className="text-blue my-0.5 hover:scale-150 mr-1.5" />
        </button>
      </div>
      {/* Categories */}
      <div
        className={`flex flex-col pb-4 ${isDisplayLicence ? null : "hidden"}`}
      >
        {sortedLicencesArray.map((licence) => {
          return (
            <label
              htmlFor={`is${licence}`}
              onClick="selectAll(document.wizard_form, this);"
              className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
            >
              <input
                type="checkbox"
                id={`is${licence}`}
                name={`is${licence}`}
                title="Select All"
                className="my-auto accent-blue mr-3"
              />
              {licence}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default LicencesFilter;
