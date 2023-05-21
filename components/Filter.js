"use client";

import PrimaryButton from "./PrimaryButton";

export default function Filter() {
  return (
    <div className="z-10 text-white font-mont w-96 h-96 bg-[#1F1F1F] absolute right-3 top-2 rounded-md p-4">
      <p className="text-2xl font-semibold">Filtros</p>
      <div className="flex flex-col w-full">
        <p className="text-[#cdcdcd]">Genêro</p>
        <div className="flex max-w-full flex-wrap gap-2">
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Ação</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Drama</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Mistério</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Aventura</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Família</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Romance</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Animação</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Fantasia</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Ficção Cientifíca</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Comédia</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">História</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Guerra</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Crime</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Horror</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Maior de idade</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Documentário</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label className="ml-1">Música</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <p className="text-[#cdcdcd]">Nota</p>
        <input className="w-full" type="range"></input>
        <div className="flex gap-4 mt-2">
          <div>
            <input type="radio" name="rangeType"></input>
            <label className="ml-1">Desativado</label>
          </div>
          <div>
            <input type="radio" name="rangeType"></input>
            <label className="ml-1">Superior</label>
          </div>
          <div>
            <input type="radio" name="rangeType"></input>
            <label className="ml-1">Inferior</label>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <PrimaryButton>Confirmar</PrimaryButton>
      </div>
    </div>
  );
}
