"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const [isXturn, setIsXturn] = useState(true);

  const [whoIsWon, setwhoIsWon] = useState(false);

  const WINNING_INSTANCES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  const checkWin = () => {
    for (let i = 0; i < WINNING_INSTANCES.length; i++) {
      const [a, b, c] = WINNING_INSTANCES[i];
      //boxes[WINNING_INSTANCES[[a,b,c]]] === boxes[a]
      if (boxes[a] && boxes[a] == boxes[b] && boxes[a] == boxes[c]) {
        if (isXturn) {
          setwhoIsWon("O  won");
        } else {
          setwhoIsWon("X  won");
        }
      }
    }
  };

  useEffect(() => {
    checkWin();
  }, [boxes]);

  const handleClick = (index) => {
    const upDatedBoxes = [...boxes];
    if (isXturn) {
      if (boxes[index] !== null) {
        return;
      } else {
        upDatedBoxes[index] = "X";

        setIsXturn(!isXturn);
      }
    } else {
      if (boxes[index] !== null) {
        return;
      } else {
        upDatedBoxes[index] = "O";
        setIsXturn(!isXturn);
      }
    }

    setBoxes(upDatedBoxes);
  };

  const handleReset = () => {
    setBoxes(Array(9).fill(null));
    setwhoIsWon(false);
    setIsXturn(true);
  };

  return (
    <div className=" flex flex-col gap-20 justify-center items-center h-screen">
      <div className="grid grid-cols-3 grid-rows-3 px-10 py-15 bg-violet-300 gap-10 w-150 h-150">
        {boxes.map((box, index) => {
          return (
            <div
              key={index}
              className="bg-amber-50 rounded-2xl flex justify-center items-center text-3xl text-black"
              onClick={() => {
                handleClick(index);
              }}
            >
              {box}
            </div>
          );
        })}
      </div>
      <button
        className="border bg-violet-300 px-4 py-2 rounded-2xl"
        onClick={handleReset}
      >
        Reset
      </button>
      <p className="text-white bg-green-500 text-5xl">{whoIsWon}</p>
    </div>
  );
};

export default Page;
