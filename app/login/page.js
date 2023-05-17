import Image from "next/image";
import Link from "next/link";
import Input from "../../components/input";
import PriButton from "../../components/PrimaryButton.js";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col bg-movie">
      <div className="mt-10 ml-10 xs:ml-20">
        <div className="font-mont">
          <span className="text-white font-light">Film</span>
          <span className="text-[#AC1A19] font-bold">Chase</span>
        </div>

        <div className="mt-10">
          <div className=" font-mont font-bold">
            <span className="text-white sm:text-4xl text-2xl">
              Entre na sua conta
            </span>
            <span className="text-[#AC1A19] text-7xl">.</span>
          </div>

          <div className="font-mont mt-2">
            <span className="text-[#BABABA] sm:text-sm text-xs font-medium">
              Não tem uma conta?
            </span>
            <span className="text-[#AC1A19] sm:text-sm text-xs font-bold">
              <Link href="/"> Cadastre</Link>
            </span>
            <div className=" mt-10">
              <Input placeholder="Email" />
              <Input placeholder="Senha" />
            </div>
            <PriButton>Entrar</PriButton>
          </div>
        </div>
      </div>
    </main>
  );
}
