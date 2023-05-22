"use client";

import { useState } from "react";
import FilmCard from "../../components/FilmCard.js";
import LateralMenu from "../../components/LateralMenu.js";
import Filter from "@/components/Filter.js";
import { Search, AccountCircle, FilterList } from "@material-ui/icons";

export default function UserList() {
  const [openFilters, setOpenFilters] = useState(false);
  const [films, setFilms] = useState([
    {
      name: "As aventuras de TinTin",
      rate: 8.0,
      image:
        "https://images.justwatch.com/poster/254317172/s718/as-aventuras-de-tintim.%7Bformat%7D",
    },
  ]);
  return (
    <main className="font-mont w-screen h-screen bg-[#161616] flex">
      <LateralMenu userList={true}></LateralMenu>
      <div className="flex flex-col h-screen w-full p-6">
        <div className="flex w-full h-fit">
          <div className="flex items-center gap-2 w-full p-4 h-12 border-[#252525] border rounded-md hover:border-[#757575] transition-all">
            <Search className="text-[#A1A1A1]"></Search>
            <input
              className="font-mont bg-transparent w-full focus:outline-none text-white"
              placeholder="Buscar por nome do filme"
            ></input>
            <div className="flex relative">
              <FilterList
                onClick={() =>
                  openFilters ? setOpenFilters(false) : setOpenFilters(true)
                }
                className="text-[#A1A1A1] cursor-pointer active:scale-90 transition-all hover:text-[#cdcdcd]"
              ></FilterList>
              {openFilters ? <Filter></Filter> : false}
            </div>
          </div>
          <div className="h-12 w-12 flex items-center justify-center">
            <AccountCircle className="text-[#A1A1A1]"></AccountCircle>
          </div>
        </div>
        <div className="flex w-full h-full mt-4">
          {films.length == 0 ? (
            <p className="text-[#A1A1A1] text-2xl text-center w-full self-center">
              Nenhum filme encontrado
            </p>
          ) : (
            <div className="flex gap-3 flex-wrap">
              {films.map((film) => {
                return (
                  <FilmCard
                    name={film.name}
                    image={film.image}
                    rate={film.rate}
                  ></FilmCard>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
