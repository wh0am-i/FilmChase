import React, { useState } from "react";
import { Favorite, Visibility, List, Star } from "@material-ui/icons";

export default function FilmCard(props) {
  const handleVisibilityClick = () => {
    props.onVisibilityClick();
  };
  const handleLikeClick = () => {
    props.onLikeClick();
  };
  return (
    <main className="font-mont">
      <div className="bg-[#1C1C1C] w-56 h-72 rounded-2xl">
        <div className="relative flex flex-col">
          {props.image ? (
            <img
              className="h-40 rounded-t-2xl w-full object-cover"
              src={"https://image.tmdb.org/t/p/w500/" + props.image}
            />
          ) : (
            <img
              className="h-40 rounded-t-2xl w-full object-cover"
              src="noPhoto.png"
            />
          )}
          <div className="absolute top-36 w-full items-center flex justify-center">
            <div className="w-fit px-3 bg-[#161616] h-10 rounded-md flex items-center">
              <span className="text-center text-white">{props.title}</span>
            </div>
          </div>
          <div className="flex gap-3 w-full h-12 mt-8 items-center justify-center">
            <List className="text-[#A1A1A1]" />
            <Favorite
              onClick={handleLikeClick}
              className="text-[#A1A1A1] cursor-pointer hover:text-red-700 transition-all active:scale-90"
            />
            <Visibility
              className="text-[#A1A1A1] cursor-pointer hover:text-white active:scale-90 transition-all"
              onClick={handleVisibilityClick}
            />
          </div>
          <div className="flex mt-2 w-full gap-2 items-center justify-center">
            <Star className="text-[#FFC700]" />
            <span className="text-lg text-[#FFC700]">{props.rate}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
