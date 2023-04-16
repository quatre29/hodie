import React from "react";
import type { TaskItemType } from "./TasksContainer";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface TaskItemProps {
  task: TaskItemType;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="y-4 my-2 grid w-full grid-cols-4  flex-row py-4">
      <div className="f col-span-1 flex flex-row items-center justify-center">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              checked
              className="checkbox-success checkbox"
            />
          </label>
        </div>
        <button className=" btn-error btn-xs btn-circle btn">
          <XMarkIcon className="h-6" />
        </button>
        {/* <ClockIcon className="h-8" /> */}
      </div>
      <div
        className={`indicator col-span-3 w-full rounded-lg border-2 ${
          task.NN ? "border-secondary" : "border-gray-600"
        } p-2`}
      >
        {task.NN && (
          <span className="badge-secondary badge indicator-center indicator-item">
            NN
          </span>
        )}
        <div className="flex items-center justify-start text-left ">
          {task.title}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
