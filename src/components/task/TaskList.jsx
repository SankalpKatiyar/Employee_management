import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-white mb-4 ml-2">
        Task Overview
      </h2>

      <div
        id="tasklist"
        className="h-auto overflow-x-auto flex items-start gap-6 flex-nowrap w-full px-3 py-4 scroll-smooth scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 snap-x snap-mandatory"
      >
        {data.tasks.map((elem, idx) => {
          let TaskComponent = null;

          if (elem.active) TaskComponent = AcceptTask;
          else if (elem.newTask) TaskComponent = NewTask;
          else if (elem.completed) TaskComponent = CompleteTask;
          else if (elem.failed) TaskComponent = FailedTask;

          return TaskComponent ? (
            <div
              key={idx}
              className="snap-start shrink-0 w-[300px] rounded-xl bg-[#1e1e1e] p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-slate-700"
            >
              <TaskComponent data={elem} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default TaskList;
