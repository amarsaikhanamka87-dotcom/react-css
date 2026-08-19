"use client";

import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //add
  const handleClick = () => {
    if (!value.trim()) return;
    setTasks([
      ...tasks,
      { task: value, isCompleted: false, id: Math.random() },
    ]);
    setValue("");
  };

  //checkbox
  const handleChecked = (id) => {
    setTasks(
      tasks.map((el) => {
        return id === el.id ? { ...el, isCompleted: !el.isCompleted } : el;
      }),
    );
  };

  const completedNum = tasks.filter((task) => task.isCompleted).length;

  const handleDelete = (id) => {
    setTasks(tasks.filter((i) => i.id !== id));
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
  const deleteCompleted = () => {
    setTasks(tasks.filter((t) => !t.isCompleted));
  };
  const enter = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-white justify-center items-center relative">
      <div className="shadow-2xl shadow-black bg-gray-50 p-5 rounded-2xl flex flex-col gap-8 absolute top-20">
        <div className="flex gap-10">
          <input
            value={value}
            onChange={handleChange}
            onKeyDown={enter}
            placeholder="     Write here ..."
            className="flex flex-col border rounded-2xl border-gray-500 text-black w-80 justify-evenly"
          />

          <button
            onClick={handleClick}
            className="text-black border  rounded-2xl py-0.5 px-3"
          >
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
                className="border border-gray-500 rounded-2xl p-4 text-black w-100 flex  gap-30  "
              >
                <div className="flex gap-5 w-50">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleChecked(item.id)}
                  />
                  {item.task}
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className=" py-0.5 px-2 rounded-2xl bg-red-100"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-100 h-[1px] bg-black"></div>
        <div className="text-1xl text-black  flex gap-18 justify-center">
          <p>
            {completedNum} of {tasks.length} tasks completed
          </p>
          <button
            onClick={deleteCompleted}
            className="border border-red-100 rounded-2xl px-5 bg-red-100"
          >
            Clear completed
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
