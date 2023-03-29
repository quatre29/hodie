import React from "react";
import RadarStats from "../actions/stats/RadarStats";

const tabs = ["Overall", "This Sprint", "Last Sprint"];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  return (
    <>
      <div className="tabs mb-5">
        {tabs.map((tab, index) => (
          <a
            key={index}
            className={`tab-lifted tab ${
              selectedTab === index ? "tab-active" : ""
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </a>
        ))}
      </div>
      <RadarStats dataIndex={selectedTab} />
    </>
  );
};

export default Tabs;
