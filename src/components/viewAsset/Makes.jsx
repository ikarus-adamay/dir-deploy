import React, { useState } from "react";
import Modal from "react-modal";
import img from "../../Assets/random render.jpg";
import user from "../../Assets/User1.png";
import { FileUploader } from "react-drag-drop-files";

const Makes = () => {
  const [isModal, setIsModal] = useState(false);
  const fileTypes = ["JPEG", "PNG"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      <Modal
        isOpen={isModal}
        onRequestClose={() => setIsModal(false)}
        className="translate-y-1/4 w-[60%] translate-x-[30%] rounded-[20px] focus:outline-none"
      >
        <div className="bg-grey-100 p-10 rounded-[20px] drop-shadow-2xl text-grey-700 ">
          <p className="text-3xl underline font-bold ml-16 pl-2 mb-3">Makes</p>
          <div className="  w-200 overflow-x-auto overflow-hidden mx-auto">
            <div className="grid grid-rows-2 grid-cols-8 grid-flow-col w-300">
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
              <div className="p-1">
                <img className="rounded-lg" src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="mx-auto px-auto justify-center flex my-5">
            <div>
              <img className="h-16" src={user} alt="" />
            </div>
            <div className="m-2">
              <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
              <p>
                {file ? `File name: ${file[0].name}` : "Upload your Make !!"}
              </p>
            </div>
            <button
              className=" bg-blue text-white text-xl h-10 px-5 rounded-lg mt-3 hover:bg-blue-600 active:bg-blue-700 outline-none"
              onClick={(e) => {
                e.preventDefault();
                setIsModal(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      </Modal>
      <div className="grid grid-cols-2 grid-flow-row grid-rows-2x">
        <div className="p-1">
          <img className="rounded-lg drop-shadow-lg" src={img} alt="" />
        </div>
        <div className="p-1">
          <img className="rounded-lg drop-shadow-lg" src={img} alt="" />
        </div>
        <div className="p-1">
          <img className="rounded-lg drop-shadow-lg" src={img} alt="" />
        </div>
        <div className="p-4">
          <div
            className="rounded-lg drop-shadow-lg bg-blue h-full text-white text-center font-bold cursor-pointer hover:bg-blue-600 active:bg-blue-700 py-8"
            onClick={() => setIsModal(true)}
          >
            Show more/Upload yours
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makes;
