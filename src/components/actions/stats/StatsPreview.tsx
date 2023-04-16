import React from "react";
import TopStats from "./TopStats";
import Tabs from "~/components/UI/Tabs";

const StatsPreview = () => {
  return (
    <div className="h-56 md:col-span-2 md:h-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body grid grid-cols-3 items-center text-center">
          <TopStats />
          <div className="col-span-2 flex h-full w-full flex-col items-center justify-center ">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
