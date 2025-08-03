import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (asignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-[#1f2937] to-[#111827] mt-6 rounded-xl shadow-xl border border-gray-700">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label className="text-sm text-gray-200 mb-1 block font-semibold">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md outline-none bg-[#111827] border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-200 mb-1 block font-semibold">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md outline-none bg-[#111827] border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
              type="date"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-200 mb-1 block font-semibold">
              Assign to
            </label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md outline-none bg-[#111827] border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-200 mb-1 block font-semibold">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md outline-none bg-[#111827] border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 transition-all"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-full md:w-[45%] flex flex-col">
          <label className="text-sm text-gray-200 mb-1 font-semibold">
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded-md outline-none bg-[#111827] border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 resize-none transition-all"
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-600 text-white py-3 px-5 rounded-md text-sm mt-6 font-semibold hover:bg-emerald-700 transition-all w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
