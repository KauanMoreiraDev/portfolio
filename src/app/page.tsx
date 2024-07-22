"use client";

import Image from "next/image";
import RedesSociais from "./components/redesSociais/redesSociais";
import Button from "./components/button/button";
import Title from "./components/title/title";
import SubTitle from "./components/subTitle/subTitle";
import { DownloadIcon, PaperPlaneIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import RoleBaixo from "./components/roleBaixo/roleBaixo"

export default function Home() {
  
  const handleClick = () => {
    console.log("pai ta dominando em AKSKAKSKAKASK");
  };

  const serviços = [
    {
      serviço: "Criação de Site",
      button: "Veja mais...",
    },
    {
      serviço: "Criação de Layout, Figma",
      button: "Veja mais...",
    },
    {
      serviço: "Responsividade",
      button: "Veja mais...",
    },
    {
      serviço: "Seo Otimizado",
      button: "Veja mais...",
    },
    {
      serviço: "Manutenção Front-End",
      button: "Veja mais...",
    },
    {
      serviço: "Hospedagem",
      button: "Veja mais...",
    },
  ];

  const habilidades = [
    {
      skill: "HTML5",
      positionIsEnd: false,
    },
    {
      skill: "CSS3",
      positionIsEnd: true,
    },
    {
      skill: "JAVASCRIPT",
      positionIsEnd: false,
    },
    {
      skill: "TYPESCRIPT",
      positionIsEnd: true,
    },
    {
      skill: "REACT",
      positionIsEnd: false,
    },
    {
      skill: "NEXT.JS",
      positionIsEnd: true,
    },
    {
      skill: "TAILWINDCSS",
      positionIsEnd: false,
    },
    {
      skill: "UI | UX",
      positionIsEnd: true,
    },
  ];

  return (
    <main className="bg-slate-950 font-Oswald font-light text-white">
      <div className="w-screen-lg h-full">
        <div className="inicio mx-auto max-w-screen-lg py-10">
          <div className="flex flex-col items-center content-center sm:flex-row">
            <div className="bg-slate-500 w-5/12 sm:w-1/12 h-full rounded-3xl">
              <RedesSociais />
            </div>
            <div className="bg-blue-950 w-4/6 h-full rounded-3xl">
              <div className="flex flex-col p-3">
                <Title
                  fontStyle="font-medium"
                  italic="italic"
                  textSize="text-2xl"
                  textColor="text-primary"
                  label="Olá, eu sou o Kauan!"
                />
                <SubTitle
                  fontStyle="regular"
                  textSize="text-xl"
                  textColor="text-primary"
                  label="Front-end Develoaper"
                />

                <div className="m-2 p-1">
                  De Leme, São Paulo, Kauan é um especialista em front-end
                  dedicado à criação de web sites excepcionais com Next.js! 🚀💻
                  Combinando habilidade e criatividade, ele transforma ideias em
                  realidades digitais impressionantes. Utilizando o poderoso
                  framework Next.js, Kauan cria sites rápidos, dinâmicos e
                  totalmente otimizados. Quer um site que se destaque? Ele é a
                  escolha certa! Confie seu projeto a um profissional e veja a
                  mágica acontecer!{" "}
                </div>

                <Button
                  onClick={handleClick}
                  label="Baixar CV"
                  icon={<DownloadIcon/>}
                  wSize="w-full"
                  sm="sm:w-2/12"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
                <Button
                  onClick={handleClick}
                  label="Contato"
                  icon={<PaperPlaneIcon/>}
                  wSize="w-full"
                  sm="sm:w-2/12"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <div className=" max-w-full h-full">
              <div className="bg-gradient-to-bl from-pink-500 via-purple-700 to-purple-900 rounded-tl-[197px] rounded-tr-[150px] rounded-bl-[347px] rounded-br-[116px]">
                <Image
                  src="/images/kauan00.png"
                  alt=""
                  width={250}
                  height={250}
                  className="w-full h-full rounded-tl-[197px] rounded-tr-[150px] rounded-bl-[347px] rounded-br-[116px]"
                />
              </div>
            </div>
          </div>
            <RoleBaixo/>
        </div>

        <div className="serviços mx-auto max-w-screen-lg m-10">
          <div className="flex justify-center">
            <Title fontStyle="medium" textColor="white" label="SERVIÇOS" />
            <Title
              fontStyle="medium"
              textColor="white"
              label="O QUE EU OFEREÇO"
            />
          </div>
          
            <div className="mx-auto max-w-screen-md">
              <div className="grid grid-cols-2 sm:grid-cols-3">
                {serviços.map((srvfn, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center m-2 p-1"
                  >
                    <div className="w-36 h-36 bg-lime-500" />
                    <p>{srvfn.serviço}</p>
                    <p>{srvfn.button}</p>
                  </div>
                ))}
              </div>
            </div>
          
        </div>
        <div className="portfolio mx-auto max-w-screen-lg m-3">
          <div className="w-full h-full">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="bg-black w-11/12 sm:w-3/4 h-64 rounded-t-3xl sm:rounded-l-3xl">
                imagem/video
              </div>
              <div className="bg-slate-600 w-11/12 sm:w-1/4 p-2 rounded-b-3xl sm:rounded-r-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus deserunt consequuntur ratione iure consectetur
                praesentium unde illum voluptas explicabo aliquid nam aut, magni
                error nobis qui nesciunt, recusandae officiis commodi!
              </div>
            </div>
          </div>
          <div className="buttons prev e next flex flex-row justify-center">
            <div className="m-2 p-1"><ChevronLeftIcon/></div>
            <div className="m-2 p-1"><ChevronRightIcon/></div>
          </div>
        </div>

        <div className="habilidades mx-auto max-w-screen-lg">
          <div className="sm:h-32 flex items-center flex-col">
            <div className="flex flex-col h-5/6 sm:flex-row ">
            {habilidades.map((habfn, index) => (
                <div key={index} className={`flex ${habfn.positionIsEnd ? 'items-end' : 'items-start' }`}>
                  <div className="border border-transparent w-24">
                    {habfn.skill}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-pink-700 w-full h-1"/>
          </div>
        </div>

        <div className="Contato mx-auto mt-7 max-w-screen-lg">
          <div className="bg-slate-800 rounded-3xl">
            <div className="flex flex-col sm:flex-row items-center sm:justify-center w-full">
              <div className="m-1 p-2 w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel eius dolorum nulla laudantium fugiat magnam hic tempora saepe aspernatur incidunt totam libero quia aut minima, impedit sint exercitationem fugit.
              </div>
              <div className="sm:w-1/12 sm:h-full">
                <RedesSociais />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
