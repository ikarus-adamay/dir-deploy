import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineCaretDown, AiOutlineInfoCircle } from "react-icons/ai";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import Modal from "react-modal";
import "../../Explore/Card/tooltip.css";

const TimeFilter = () => {
  const [isDisplayTimeFilter, setIsDisplayTimeFilter] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="border-grey-500 bg-white rounded-md mt-6">
      {/* Categories Heading */}
      <div className="flex justify-between  p-2 text-lg">
        <div className="flex">
          <p
            onClick={() => setIsDisplayTimeFilter(!isDisplayTimeFilter)}
            className="cursor-pointer"
          >
            Total Print Time
          </p>
          <a href
            data-tip="Calculated using the standard print settings<br/>Click the i button to learn more"
            className="mt-1 ml-1.5 text-grey-700 hover:text-blue active:text-blue-700"
            onClick={() => setIsModal(true)}
          >
            <AiOutlineInfoCircle />
          </a>
          <ReactTooltip place="top" type="dark" effect="solid" multiline />
          <Modal
            isOpen={isModal}
            onRequestClose={() => setIsModal(false)}
            className="translate-y-1/4 w-1/2 translate-x-1/2 rounded-[20px] focus:outline-none"
          >
            <div className="bg-grey-100 p-5 rounded-[20px] drop-shadow-2xl text-grey-700 ">
              <div className="flex flex-col">
                <div className="p-5 text-base">
                  <p className="text-xl mx-1">Standard Settings</p>
                  <div className="flex flex-col border-2  border-grey-400 mt-3 rounded-lg">
                    <div className=" flex justify-between p-3">
                      <p>Printer</p>
                      <p>Ultimaker 5</p>
                    </div>
                    <div className=" flex justify-between p-3">
                      <p>Material</p>
                      <p>PLA</p>
                    </div>
                    <div className=" flex justify-between p-3">
                      <p>Print Core</p>
                      <p>AA 0.4</p>
                    </div>
                    <div className=" flex justify-between p-3">
                      <p>Profile</p>
                      <p>Fine-0.1mm</p>
                    </div>
                    <div className=" flex justify-between p-3">
                      <p>Infill</p>
                      <p>20%</p>
                    </div>
                    <div className=" flex justify-between p-3">
                      <p>Support</p>
                      <p className="text-2xl">
                        <BsToggleOff />
                      </p>
                    </div>
                    <div className=" flex justify-between p-3">
                      <p>Adhesion</p>
                      <p className="text-2xl">
                        <BsToggleOn />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setIsModal(!isModal)}
                  className="flex self-center"
                >
                  <div className="bg-blue text-white w-160 h-10 text-lg rounded-lg hover:cursor-pointer hover:bg-blue-700">
                    <div className="mx-auto my-1 text-center">Close pop-up</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <button onClick={() => setIsDisplayTimeFilter(!isDisplayTimeFilter)}>
          <AiOutlineCaretDown className="text-blue my-0.5 hover:scale-150 mr-1.5 ml-12" />
        </button>
      </div>
      {/* Categories */}
      <div
        className={`flex flex-col pb-4 ${isDisplayTimeFilter ? null : "hidden"
          }`}
      >
        <label
          htmlFor="isUnder10Hours"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isUnder10Hours"
            name="isUnder10Hours"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          Under 10 hours
        </label>

        <label
          htmlFor="is10HoursTo50Hours"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="is10HoursTo50Hours"
            name="is10HoursTo50Hours"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          10 hours to 50 hours
        </label>

        <label
          htmlFor="is50HoursTo100Hours"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="is50HoursTo100Hours"
            name="is50HoursTo100Hours"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          50 hours to 100 hours
        </label>

        <label
          htmlFor="isMoreThan100Hours"
          onClick="selectAll(document.wizard_form, this);"
          className=" flex p-0.5 px-3 hover:bg-grey-200 active:bg-grey-300 hover:text-grey-900"
        >
          <input
            type="checkbox"
            id="isMoreThan100Hours"
            name="isMoreThan100Hours"
            title="Select All"
            className="my-auto accent-blue mr-3"
          />
          More than 100 hours
        </label>
      </div>
    </div>
  );
};

export default TimeFilter;
