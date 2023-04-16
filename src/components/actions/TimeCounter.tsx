import React from "react";

const TimeCounter = () => {
  return (
    <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-5 text-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          {/* @ts-ignore */}
          <span style={{ "--value": 29 }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default TimeCounter;
