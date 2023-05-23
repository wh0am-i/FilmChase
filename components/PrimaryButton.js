"use client";
import React, { useState } from "react";

export default function Input({ children, onClick }) {
  return (
    <main>
      <div className="w-full mt-4">
        <button onClick={onClick} className="bg-red-500 font-mont hover:bg-red-900 transition-all active:scale-90 rounded-md xs:w-80 w-56 h-10 text-white sm:text-base text-sm font-medium ">
          {children}
        </button>
      </div>
    </main>
  );
}
