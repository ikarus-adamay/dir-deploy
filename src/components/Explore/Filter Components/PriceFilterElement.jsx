import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import Slider from "@mui/material/Slider";
import data from "../../../data.json";
import "./styles.css";
const pricesArray = [0];
data.map((asset) => pricesArray.push(asset.price));
let maxPrice = Math.max(...pricesArray);
const sliderMax = parseInt(maxPrice + 1);

const PriceFilterElement = () => {
  const [isDisplayPriceFilter, setIsDisplayPriceFilter] = useState(false);
  const [isErrorFlag, setIsErrorFlag] = useState(false);

  const [value, setValue] = useState([2, 10]);
  let priceMin = value[0];
  let priceMax = value[1];
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputs = (e) => {
    e.preventDefault();
    if (inputValue1 && inputValue2) {
      if (parseInt(inputValue1) > parseInt(inputValue2)) {
        setIsErrorFlag(true);
        return;
      }
      if (parseInt(inputValue1) < 0) {
        setIsErrorFlag(true);
        return;
      }
      if (parseInt(inputValue2) < 0) {
        setIsErrorFlag(true);
        return;
      }
      if (parseInt(inputValue2) > parseInt(sliderMax)) {
        setIsErrorFlag(true);
        return;
      }
      let values = [inputValue1, inputValue2];
      setValue(values);
      setIsErrorFlag(false);
      setInputValue1("");
      setInputValue2("");
      return;
    }
    return;
  };

  return (
    <>
      <div className="drop-shadow-lg border-grey-500 bg-white mt-6 rounded-md">
        {/* Categories Heading */}
        <div
          className="flex justify-between  p-2 text-lg hover:cursor-pointer"
          onClick={() => setIsDisplayPriceFilter(!isDisplayPriceFilter)}
        >
          <p>Price</p>
          <button>
            <AiOutlineCaretDown className="text-blue my-0.5 hover:scale-150 mr-1.5" />
          </button>
        </div>
        <div className={`${isDisplayPriceFilter ? null : "hidden"}`}>
          <div
            className="px-5 pb-4"
            style={{
              margin: "auto",
              display: "block",
            }}
          >
            <div className={`${isErrorFlag ? "hidden" : "z-10"}`}>
              <Slider
                className="text-color-blue"
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                max={sliderMax}
                disableSwap
              />
            </div>
            <div className={`${isErrorFlag ? "z-10" : "hidden"}`}>
              <div className="border-2 rounded-lg border-red-300 text-red-300 p-4 bg-red-100">
                Incompatible Inputs. Maximum input: {sliderMax}.
              </div>
            </div>

            <div className="flex justify-between ">
              <div>
                <p className="py-3 mx-2">
                  Min. <span className="font-bold text-lg">{priceMin}</span>
                </p>
              </div>
              <div>
                <p className="py-3 mx-3">
                  Max. <span className="font-bold text-lg">{priceMax}</span>
                </p>
              </div>
            </div>
            <div className="flex">
              <form>
                <input id="removeArrow1"
                  className="border-2 border-blue p-2 w-12 h-10 m-1 rounded focus:outline-blue-600"
                  type="number"
                  value={inputValue1}
                  onChange={(e) => {
                    setInputValue1(e.target.value);
                  }}
                  placeholder="Min."
                />
                <input id="removeArrow1"
                  className="border-2 border-blue p-2 w-12 h-10 m-1 rounded focus:outline-blue-600"
                  type="number"
                  value={inputValue2}
                  onChange={(e) => {
                    setInputValue2(e.target.value);
                  }}
                  placeholder="Max."
                />
                <button
                  onClick={handleInputs}
                  className="w-20 border border-grey-500 h-10 m-2 rounded bg-blue text-white hover:bg-blue-600 active:bg-blue-700"
                >
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFilterElement;
