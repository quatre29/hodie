import React from "react";

const SprintProgressBar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-center ">
      <div className="flex h-7 w-full flex-row  rounded-xl  border  from-green-400 to-green-600 text-white  shadow-2xl">
        <div
          style={{ width: "65%" }}
          className="flex h-full items-center justify-center rounded-l-xl bg-gradient-to-r from-green-600 to-green-400"
        >
          <div
            className="tooltip flex w-full items-center justify-center"
            data-tip="This bar represents the success progress of the sprint"
          >
            <span className="">65%</span>
          </div>
        </div>
        <div
          style={{ width: "10%" }}
          className="flex h-full items-center justify-center bg-gradient-to-r from-red-500 to-red-400"
        >
          <div
            className="tooltip flex w-full items-center justify-center"
            data-tip="This bar represents the missed progress of the sprint"
          >
            <span className="">10%</span>
          </div>
        </div>
        <div style={{ width: "25%" }} className=" h-full  rounded-r-xl ">
          <div
            className="tooltip flex w-full items-center justify-center"
            data-tip="This bar represents the rest of the sprint"
          >
            <span className="">25%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintProgressBar;
