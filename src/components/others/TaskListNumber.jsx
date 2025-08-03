import React from "react";

const TaskListNumbers = ({ data }) => {
  const stats = [
    {
      label: "New Task",
      count: data.taskCounts.newTask,
      color: "bg-blue-500",
      text: "text-white",
    },
    {
      label: "Completed Task",
      count: data.taskCounts.completed,
      color: "bg-green-500",
      text: "text-white",
    },
    {
      label: "Accepted Task",
      count: data.taskCounts.active,
      color: "bg-yellow-400",
      text: "text-black",
    },
    {
      label: "Failed Task",
      count: data.taskCounts.failed,
      color: "bg-red-500",
      text: "text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 ${item.color} ${item.text}`}
        >
          <h2 className="text-4xl font-extrabold mb-1">{item.count}</h2>
          <h3 className="text-lg font-medium tracking-wide">{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
