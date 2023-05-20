"use client";
import React, { useState } from "react";

export default function FilmCard(props) {
  const [value, setValue] = useState("");
  return (
    <main className="font-mont">
      <div className="bg-[#1C1C1C] w-56 h-72 rounded-2xl">
        <div className="relative flex flex-col">
          <img
            className="h-40 rounded-t-2xl w-full object-cover"
            src={props.image}
          ></img>
          <div className="absolute top-36 w-full items-center flex justify-center">
            <div className="w-fit px-3 bg-[#161616] h-10 rounded-md flex items-center">
              <span className="text-white">{props.name}</span>
            </div>
          </div>
          <div className="flex gap-3 w-full h-12 mt-8 items-center justify-center">
            <img className="w-6" src="personList.svg"></img>
            <img className="w-10" src="heart.svg"></img>
            <img className="w-6" src="eye.svg"></img>
          </div>
          <div className="flex mt-2 w-full gap-2 items-center justify-center">
            <img className="w-4" src="star.svg"></img>
            <span className="text-lg text-[#FFC700]">{props.rate}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
