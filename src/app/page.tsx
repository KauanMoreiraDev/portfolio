"use client";

import Image from "next/image";
import RedesSociais from "./components/redesSociais/redesSociais";
import Button from "./components/button/button";
import Title from "./components/title/title";
import SubTitle from "./components/subTitle/subTitle";
import { DownloadIcon, PaperPlaneIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import RoleBaixo from "./components/roleBaixo/roleBaixo";
import Data from "./components/data/data.json";
import Slide from "./components/slide/slider";

export default function Home() {
  
const { home, services, habilidades, id} = Data

  const handleClick = () => {
    console.log("pai ta dominando em AKSKAKSKAKASK");
  };

  const openPdf = () => {
    window.open('/images/curriculo_kauan_moreira.pdf','_black');
  };

  const ancorContato = () => {
    window.location.href = (id[4].srcId);
  };

  return (
    <main className="bg-slate-950 font-Oswald font-light text-white">
      <div className="w-screen-lg h-full">
        <div id="inicio" className="mx-auto max-w-screen-lg min-h-screen py-10">
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
                  textColor="primary"
                  label={home[0].title}
                />
                <SubTitle
                  fontStyle="regular"
                  textSize="text-xl"
                  textColor="text-primary"
                  label={home[0].subTitle}
                />

                <div className="m-2 p-1">
                  <div>{home[0].text1}</div>
                  <div>{home[0].text2}</div>
                  <div>{home[0].text3}</div>
                </div>

                <Button
                  onClick={openPdf}
                  label="Baixar CV"
                  icon={<DownloadIcon/>}
                  wSize="w-full"
                  sm="sm:w-2/12"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
                <Button
                  onClick={ancorContato}
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
                  width={370}
                  height={370}
                  className="w-full h-full rounded-tl-[197px] rounded-tr-[150px] rounded-bl-[347px] rounded-br-[116px] "
                />
              </div>
            </div>
          </div>
            <RoleBaixo/>
        </div>

        <div id="serviços" className="mx-auto max-w-screen-lg min-h-screen m-10">
          <div className="flex justify-center">
          <Title
                  fontStyle="font-medium"
                  italic="italic"
                  textSize="text-2xl"
                  textColor="primary"
                  label="O QUE EU OFEREÇO"
                />
          </div>
          
            <div className="mx-auto max-w-screen-md">
              <div className="grid grid-cols-2 sm:grid-cols-3">
                {services.map((srvfn, index) => (
                  <div key={index} className="flex flex-col items-center m-2 p-1">
                    <Image src={srvfn.src} alt={`Imagem para ${srvfn.serviceName}`} width={70} height={70} className="sm:w-32 sm:h-32"/>
                    <p>{srvfn.serviceName}</p>
                    <p>clique aqui</p>
                  </div>
                ))}
              </div>
            </div>  
        </div>

        <div id="portfolio" className="mx-auto max-w-screen-lg min-h-screen m-3">
          <div className="w-full h-full bg-black ">
            <div className="flex flex-col items-center sm:items-stretch sm:flex-row">
                <div className="w-11/12 sm:w-3/4 h-4/5 rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl">
                <Slide />
                </div>
              <div className="bg-slate-600 w-11/12 sm:w-1/4 sm:min-h-full p-2 rounded-b-3xl sm:rounded-bl-none sm:rounded-r-3xl align-middle">
              <p className="">
                Lading page totalmente responsiva de uma barbearia aqui da minha região, exibindo seus serviços oferecidos, designer e desenvolvimento front-end. Utilizei das ferramentas Figma, Next.js, Typescript, TailwindCss e consumo por Json. Integração com a API do Instagram e Google Maps
                </p>
              </div>
            </div>
          </div>
          <div className="buttons prev e next flex flex-row justify-center">
            <div className="m-2 p-1"><ChevronLeftIcon/></div>
            <div className="m-2 p-1"><ChevronRightIcon/></div>
          </div>
        </div>

        <div id="habilidades" className="mx-auto max-w-screen-lg">
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

        <div id="contato" className="mx-auto mt-7 max-w-screen-lg">
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
