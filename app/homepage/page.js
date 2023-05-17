import Input from "../../components/input";
import PriButton from "../../components/PrimaryButton.js";

export default function Login() {
  return (
    <main className="font-mont w-screen h-screen bg-[#161616]">
      <div className="border h-screen w-96 flex">
        <div className="ml-14">
          <div className="text-2xl mt-14">
            <span className="text-white font-light">Film</span>
            <span className="text-[#AC1A19] font-bold">Chase</span>
          </div>
          <div className="text-[#A1A1A1] mt-14">
            <p className="text-xl">Início</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="bg-white flex items-center p-3 w-60 rounded-md">
                <p className="text-[#AC1A19] font-bold">Buscar</p>
                <img src="../public/favorite.svg"></img>
              </div>
              <p>Curtidos</p>
              <p>Minha lista</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
