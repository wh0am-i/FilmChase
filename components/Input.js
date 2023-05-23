"use client";
import React, { useState, forwardRef } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");
  return (
      <div
        className="w-full text-input-container mt-5"
        placeholder={props.placeholder}
        data-show-label={value}
      >
        <input
          value={props.value}
          name={props.name}
          id={props.id}
          type={props.type}
          onChange={(e) => setValue(e.target.value)}
          placeholder={props.placeholder}
          className="text-input bg-[#1d1d1d] font-mont focus:bg-black placeholder:sm:text-base placeholder:text-sm focus:outline outline-none placeholder:text-[#7a7a7a] focus:outline-2 focus:outline-[#AC1B1A] rounded-md xs:w-80 w-56 h-10  text-white pl-4 font-medium "
        />
      </div>
  );
}