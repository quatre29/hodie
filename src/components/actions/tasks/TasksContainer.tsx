import React from "react";
import TaskItem from "./TaskItem";

export enum TaskStatus {
  Completed,
  Failed,
  InProgress,
}

export interface TaskItemType {
  title: string;
  status: TaskStatus;
  NN: boolean;
}

const TEMP_TASKS = [
  {
    title: "task 1",
    status: TaskStatus.InProgress,
    NN: true,
  },
  {
    title: "task 2",
    status: TaskStatus.Failed,
    NN: false,
  },
  {
    title: "task  sadsad sa dsa dsa dsa dsa dsa dsa dsa d3",
    status: TaskStatus.Completed,
    NN: false,
  },
  {
    title: "task 4 sadsadsad sa dsa sadsadsadsad",
    status: TaskStatus.InProgress,
    NN: true,
  },
  {
    title: "task  sadsad sa dsa dsa dsa dsa dsa dsa dsa d3",
    status: TaskStatus.Completed,
    NN: false,
  },
  {
    title: "task 4 sadsadsad sa dsa sadsadsadsad",
    status: TaskStatus.InProgress,
    NN: true,
  },
  {
    title: "task  sadsad sa dsa dsa dsa dsa dsa dsa dsa d3",
    status: TaskStatus.Completed,
    NN: false,
  },
  {
    title: "task 4 sadsadsad sa dsa sadsadsadsad",
    status: TaskStatus.InProgress,
    NN: true,
  },
];

const TasksContainer = () => {
  return (
    <div className="col-span-1 h-56  md:h-auto ">
      <div className="card w-full bg-base-100  shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Tasks</h2>
          <div className="max-h-80 overflow-y-auto">
            {TEMP_TASKS.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
