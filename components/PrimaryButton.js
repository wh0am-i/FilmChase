"use client";
import React, { useState } from "react";

export default function Input({ children }) {
  return (
    <main>
      <div className="w-full mt-4">
        <button className="bg-red-500 rounded-md xs:w-80 w-56 h-10 text-white sm:text-base text-sm font-medium ">
          {children}
        </button>
      </div>
    </main>
  );
}
