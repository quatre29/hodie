import React from "react";

const TaskTitle = () => {
  return (
    <div className="my-2 flex h-10 min-w-fit items-center justify-start">
      Task 1
    </div>
  );
};

const TableTaskColumnTitle = () => {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="card-title flex items-center justify-center">Tasks</div>
      <div className="h-full">
        <TaskTitle />
        <TaskTitle />
        <TaskTitle />
      </div>
    </div>
  );
};

const TableTaskColumn = () => {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="flex items-center justify-center">12</div>
      <div className="h-ful">
        <div className=" my-2 h-10 w-full rounded-md bg-gradient-to-r from-green-600 to-green-400"></div>
        <div className="my-2 h-10 w-full rounded-md bg-gradient-to-r from-red-600 to-red-400"></div>
        <div className="my-2 h-10 w-full rounded-md bg-gradient-to-r from-green-600 to-green-400 shadow-md shadow-yellow-300"></div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="flex w-full flex-row overflow-x-auto px-4 ">
      <div className="grid w-full grid-flow-col flex-row gap-2">
        <TableTaskColumnTitle />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
        <TableTaskColumn />
      </div>
    </div>
  );
};

const SprintContributions = () => {
  return (
    <div className="mockup-window mt-20 mb-16 w-full bg-base-300 shadow-xl">
      <div className="flex flex-col justify-center bg-base-200 px-4 py-16">
        <Table />
      </div>
    </div>
  );
};

export default SprintContributions;
