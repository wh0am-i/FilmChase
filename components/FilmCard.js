"use client";
import React, { useState } from "react";

export default function FilmCard(props) {
  const [value, setValue] = useState("");
  return (
    <main className="font-mont">
      <div className="bg-[#1C1C1C] w-56 h-64 rounded-2xl">
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
        </div>
      </div>
    </main>
  );
}
