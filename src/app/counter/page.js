"use client";

import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [count, setCount] = useState(0);
  const [checkNum, setcheckNum] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (!value.trim()) return;
    setTasks([
      ...tasks,
      { task: value, isCompleted: false, id: Math.random() },
    ]);
    setValue("");
    setCount(count + 1);
  };

  const handleChecked = (id) => {
    setTasks(
      tasks.map((el) => {
        return id === el.id ? { ...el, isCompleted: !el.isCompleted } : el;
      }),
    );
    setcheckNum(checkNum + 1);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((i) => i.id !== id));

    setCount(count - 1);
    setcheckNum(checkNum - 1);
  };

  const handleAll = () => {
    setFilter("all");
  };

  const handleActive = () => {
    setFilter("active");
  };

  const handleDone = () => {
    setFilter("completed");
  };

  const myFilter = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;

    if (filter === "completed") return task.isCompleted;

    return true;
  });

  return (
    <div className="h-screen w-screen flex flex-col gap-8 bg-white justify-center items-center">
      <div className="shadow-2xl shadow-black bg-gray-50 p-5 rounded-2xl flex flex-col gap-8">
        <div className="flex gap-10">
          <div className="flex flex-col border border-amber-900 text-black w-80 bg-gray-50">
            <input value={value} onChange={handleChange} />
          </div>
          <button onClick={handleClick} className="text-black border ">
            add
          </button>
        </div>
        <div className="flex gap-5 text-black w-100">
          <div
            className={`border rounded-2xl p-3 bg-gray-50 ${filter === `all` ? `bg-green-400` : ` bg-amber-50`}`}
            onClick={handleAll}
          >
            All
          </div>
          <button
            className={`border rounded-2xl p-3 bg-gray-50 ${filter === `active` ? `bg-green-400` : ` bg-amber-50`}`}
            onClick={handleActive}
          >
            Active
          </button>
          <button
            className={`border rounded-2xl p-3 bg-gray-50 ${filter === `completed` ? `bg-green-400` : ` bg-amber-50`}`}
            onClick={handleDone}
          >
            Done
          </button>
        </div>
        <div className="space-y-5">
          {myFilter.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-blue-950 p-4 text-black w-100 flex  gap-30 bg-gray-200 "
              >
                <div className="flex gap-5 w-50">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleChecked(item.id)}
                  />
                  {item.task}
                </div>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            );
          })}
        </div>
        <div className="w-100 h-[1px] bg-black"></div>
        <div className="text-1xl text-black  flex gap-18 justify-center">
          <p>
            {checkNum} of {count} tasks completed
          </p>
          <button className="border border-red-100 rounded-2xl px-5 bg-red-100">
            clear completed
          </button>
        </div>
        <div className="flex gap-2 text-gray-500 justify-center">
          Powered by <p className="text-green-400">PineApple academy</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
