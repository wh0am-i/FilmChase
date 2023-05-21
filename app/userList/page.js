"use client";

import { useEffect, useState } from "react";
import FilmCard from "../../components/FilmCard.js";
import LateralMenu from "../../components/LateralMenu.js";
import Filter from "@/components/Filter.js";
import { Search, AccountCircle, FilterList } from "@material-ui/icons";
import PrimaryButton from "@/components/PrimaryButton.js";

export default function UserList() {
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/list/${page}?language=en-US`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzUxM2VhMDAxZDUyMTNkYjExMWQ4OTI5M2E0YjIyNCIsInN1YiI6IjY0NWNmZDFlMWI3MGFlMDBmZDZkNWUwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZUoMEgF3X1GkXtbYo8Y4kxSyQuNYBlL6f28bUM23Rk",
      },
    })
      .then((response) => response.json())
      .then((response) =>
        films.length == 0
          ? setFilms(response.items)
          : setFilms([...films, ...response.items])
      )
      .catch((err) => console.error(err));
  }, [page]);
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
        <div className="flex w-full h-full mt-4 overflow-y-auto flex-col">
          {films.length == 0 ? (
            <p className="text-[#A1A1A1] text-2xl text-center w-full self-center">
              Nenhum filme encontrado
            </p>
          ) : (
            <div className="flex gap-3 flex-wrap">
              {films.map((film) => {
                return (
                  <FilmCard
                    title={film.title}
                    image={film.poster_path}
                    rate={film.vote_average}
                  ></FilmCard>
                );
              })}
            </div>
          )}
          <div
            onClick={() => setPage(page + 1)}
            className="w-full flex items-center justify-center"
          >
            <PrimaryButton>Ver mais</PrimaryButton>
          </div>
        </div>
      </div>
    </main>
  );
}