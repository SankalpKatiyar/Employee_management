import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] p-6 rounded-2xl shadow-lg mt-5">
      <div className="sticky top-0 z-10 bg-emerald-600/90 backdrop-blur-sm text-white mb-4 py-3 px-6 flex justify-between rounded-xl shadow-md">
        <h2 className="text-lg font-semibold w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold w-1/5 text-center">🆕 New</h3>
        <h5 className="text-lg font-semibold w-1/5 text-center">⚡ Active</h5>
        <h5 className="text-lg font-semibold w-1/5 text-center">
          ✅ Completed
        </h5>
        <h5 className="text-lg font-semibold w-1/5 text-center">❌ Failed</h5>
      </div>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="transition-all duration-200 hover:scale-[1.01] hover:bg-emerald-800/20 backdrop-blur-md border border-emerald-500 py-3 px-6 flex justify-between items-center rounded-xl shadow-sm text-white"
          >
            <h2 className="text-md font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="text-md font-medium w-1/5 text-center text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-md font-medium w-1/5 text-center text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-md font-medium w-1/5 text-center text-green-400">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-md font-medium w-1/5 text-center text-red-500">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
