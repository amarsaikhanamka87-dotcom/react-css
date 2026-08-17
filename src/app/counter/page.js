"use client";

import { useState } from "react";

const Page = () => {
  // const [count, setCount] = useState(1);
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(true);

  // const handleMinus = () => {
  //   setCount(count / 2);
  // };

  // const handleSum = () => {
  //   setCount(count * 2);
  // };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setTasks([...tasks, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return setTasks(!task.done);
    if (filter === "done") return task.done;
    return true;
  });

  return (
    <div className="h-screen w-screen flex flex-col gap-8 bg-amber-50 justify-center items-center">
      <div className="bg-amber-100 p-5 rounded-2xl flex flex-col gap-5">
        <div className="flex gap-10">
          <div className="flex flex-col border border-amber-900 text-black w-80">
            <input value={value} onChange={handleChange} />
          </div>
          <button onClick={handleClick} className="text-black border ">
            add
          </button>
        </div>
        <div className="flex gap-5 text-black w-100">
          <div
            className="border rounded-2xl p-3 bg-amber-50"
            onClick={() => filteredTask}
          >
            All
          </div>
          <div
            className="border rounded-2xl p-3 bg-amber-50"
            onClick={() => filteredTask}
          >
            Active
          </div>
          <div
            className="border rounded-2xl p-3 bg-amber-50"
            onClick={() => filteredTask}
          >
            Done
          </div>
        </div>
        <div className="space-y-5">
          {tasks.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-blue-950 p-4 text-black w-100 flex  gap-30 bg-amber-50"
              >
                <div className="flex gap-5 w-50">
                  <input type="checkbox" />
                  {item}
                </div>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            );
          })}
        </div>

        {/* <div className="flex gap-10">
        <button
          className="py-5 px-8.5 text-black border  border-amber-950"
          onClick={handleMinus}
        >
          -
        </button>
        <p className="text-7xl  text-black ">{count}</p>
        <button
          className="py-5 px-8.5 text-black border  border-amber-950"
          onClick={handleSum}
        >
          +
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default Page;
