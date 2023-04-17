import React from "react";

type CustomCSSProperties = {
  "--value": number;
};

type StyleProps = React.CSSProperties & CustomCSSProperties;

const TimeCounter = () => {
  return (
    <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-5 text-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 15 } as StyleProps}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 10 } as StyleProps}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 24 } as StyleProps}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 29 } as StyleProps}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default TimeCounter;
