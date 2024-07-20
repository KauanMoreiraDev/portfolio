"use client";

import RedesSociais from "./components/redesSociais/page";
import Image from "next/image";
import ButtonG from "./components/buttonG/page";
import TitleG from "./components/titleG/page";


export default function Home() {

  const handleClick = () => {
    console.log('pai ta dominando em AKSKAKSKAKASK');
  };

  return (
    <main className="bg-slate-950 font-Oswald font-light">
      <div className="w-screen-lg h-screen">
        <div className="mx-auto max-w-screen-lg p-2">
          <div className="flex items-center">
            <div className="bg-slate-500 w-1/12 h-full rounded-3xl">
              <RedesSociais />
            </div>
            <div className="bg-blue-950 w-4/6 h-full">
              <div className="flex flex-col space-y-7 p-3">
                {/* <div className="text-primary text-2xl font-medium italic">Olá, eu sou o Kauan!</div> */}
                <TitleG fontStyle="medium" italic="italic" textSize="2xl" textColor="primary" label="Olá, eu sou o Kauan!" />
                <div className="text-primary text-xl font-regular">Front-end Develoaper</div>
                <div className="text-white">De Leme, São Paulo, Kauan é um especialista em front-end dedicado à criação de web sites excepcionais com Next.js! 🚀💻

                  Combinando habilidade e criatividade, ele transforma ideias em realidades digitais impressionantes. Utilizando o poderoso framework Next.js, Kauan cria sites rápidos, dinâmicos e totalmente otimizados. Quer um site que se destaque? Ele é a escolha certa!

                  Confie seu projeto a um profissional e veja a mágica acontecer! </div>
                
                <ButtonG onClick={handleClick} label="clique aqui para teste" bgColor="bg-primary" textColor="text-red-500" />
                
              </div>
            </div>
            <div className=" max-w-full h-full">
              <div className="bg-gradient-to-bl from-pink-500 via-purple-700 to-purple-900">
                <Image src="/images/kauan00.png" alt="" width={250} height={250} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
