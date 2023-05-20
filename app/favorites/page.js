"use client";

import { useState } from "react";
import Link from "next/link";
import FilmCard from "../../components/FilmCard.js";

export default function Favorites() {
  const [films, setFilms] = useState([
    {
      name: "As aventuras de TinTin",
      rate: 8.0,
      image: "https://images.justwatch.com/poster/254317172/s718/as-aventuras-de-tintim.%7Bformat%7D"
    },
  ]);
  return (
    <main className="font-mont w-screen h-screen bg-[#161616] flex">
      <div className="border-r border-[#1F1F1F] h-screen w-96 flex">
        <div className="ml-8">
          <div className="text-2xl mt-14">
            <span className="text-white font-light">Film</span>
            <span className="text-[#AC1A19] font-bold">Chase</span>
          </div>
          <div className="text-[#A1A1A1] mt-14 border-b border-[#1F1F1F] py-4">
            <p className="text-xl">Ínicio</p>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/homepage" className="flex gap-2 p-3 rounded-md cursor-pointer hover:bg-slate-800 transition-all">
                <img src="searchDisabled.svg"></img>
                <p className="font-bold">Buscar</p>
              </Link>
              <Link href="/favorites" className="bg-white flex items-center p-3 w-60 rounded-md gap-2 cursor-pointer">
                <img src="heart.svg"></img>
                <p className="text-[#AC1A19] font-bold">Curtidos</p>
              </Link>
              <Link href="/userList" className="flex gap-2 p-3 rounded-md cursor-pointer hover:bg-slate-800 transition-all">
                <img src="personList.svg"></img>
                <p className="font-bold">Minha lista</p>
              </Link>
            </div>
          </div>
          <Link
            href="/"
            className="mt-4 flex gap-2 p-3 rounded-md cursor-pointer hover:bg-slate-800 transition-all"
          >
            <img src="leave.svg"></img>
            <p className="text-[#A1A1A1] font-bold">Sair da conta</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full p-6">
        <div className="flex w-full h-fit">
          <div className="flex items-center gap-2 w-full p-4 h-12 border-[#252525] border rounded-md hover:border-[#757575] transition-all">
            <img className="w-4 h-4" src="searchBar.svg"></img>
            <input
              className="font-mont bg-transparent w-full focus:outline-none text-white"
              placeholder="Buscar por nome do filme"
            ></input>
            <img className="w-5 h-5 cursor-pointer active:scale-90 transition-all" src="filter.svg"></img>
          </div>
          <div className="h-12 w-12 flex items-center justify-center">
            <img className="w-5 h-5" src="person.svg"></img>
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
                return <FilmCard name={film.name} image={film.image} rate={film.rate}></FilmCard>;
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
