"use client";

import { useTheme } from "./context/ThemeContext";
import Image from "next/image";
import RedesSociais from "./components/redesSociais/redesSociais";
import Button from "./components/button/button";
import Title from "./components/title/title";
import SubTitle from "./components/subTitle/subTitle";
import { Download, SendHorizontal } from "lucide-react";
import RoleBaixo from "./components/roleBaixo/roleBaixo";
import Data from "./components/data/data.json";
import SlideProjects from "./components/slideProject/slide";
import { useState, useEffect, useRef } from "react";


const { home, services, menu } = Data


export default function Home() {


  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleClick = () => {
    console.log("pai ta dominando em AKSKAKSKAKASK");
  };

  const openPdf = () => {
    window.open('/images/curriculo_kauan_moreira.pdf', '_black');
  };

  const ancorContato = () => {
    window.location.href = (menu[4].srcLink);
  };


  const elementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    elementsRef.current = document.querySelectorAll(".ScrollFade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "transition-opacity", "duration-1000");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.add("opacity-0");
            entry.target.classList.remove("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current?.forEach((element) => observer.observe(element));

    return () => {
      elementsRef.current?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <main className={`font-Oswald font-light ${theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-400 text-black"}`}>
      <div className="w-screen-lg h-full">
        <div id="inicio" className="ScrollFade">
          <div className="mx-auto max-w-screen-lg h-full py-16">
            <div className="flex flex-col items-center  sm:flex-row">
              <div className={`w-5/12 sm:w-1/12 h-full rounded-3xl ${theme === "dark" ? "bg-slate-500" : "bg-gray-500"}`}>
                <RedesSociais inName={false} position="center" display="flex" />
              </div>
              <div className={`w-4/6 h-full rounded-3xl ${theme === "dark" ? "bg-blue-950" : "bg-gray-300"} `}>
                <div className="flex flex-col p-3">
                  <Title
                    fontStyle="font-medium" italic="italic" textSize="text-2xl"
                    textColor="primary" label={home[0].title}
                  />
                  <SubTitle
                    fontStyle="regular" textSize="text-xl"
                    textColor="text-primary" label={home[0].subTitle}
                  />

                  <div className="p-3">
                    <div>{home[0].text1}</div>
                    <div>{home[0].text2}</div>
                    <div>{home[0].text3}</div>
                  </div>

                  <Button
                    onClick={openPdf}
                    label="Baixar CV" icon={<Download className="w-5 h-5" />}
                    wSize="w-full" sm="sm:w-2/12"
                    bgColor="bg-primary" textColor="text-white"
                  />
                  <Button
                    onClick={ancorContato}
                    label="Contato" icon={<SendHorizontal className="w-4 h-4" />}
                    wSize="w-full" sm="sm:w-2/12"
                    bgColor="bg-primary" textColor="text-white"
                  />
                </div>
              </div>


              <div className="Avatar">
                <div className=" w-4/5 h-4/5 sm:w-[90%] sm:h-[90%] p-1 mx-auto">
                  <div className="bg-gradient-to-bl from-pink-500 via-purple-700 to-purple-900 rounded-tl-[197px] rounded-tr-[150px] rounded-bl-[347px] rounded-br-[116px] overflow-hidden">
                    <Image
                      src="/images/kauanAvatar.png" alt=""
                      width={500} height={500}
                      className="w-1/2 h-1/2 rounded-tl-[197px] rounded-tr-[150px] mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <RoleBaixo />
          </div>
        </div>

        <div id="serviços" className="ScrollFade">
          <div className="mx-auto max-w-screen-lg h-full py-16">
            <div className="flex justify-center">
              <Title
                fontStyle="font-medium" italic="italic"
                textSize="text-2xl" textColor="primary"
                label="O QUE EU OFEREÇO"
              />
            </div>

            <div className="mx-auto max-w-screen-md">
              <div className="grid grid-cols-2 sm:grid-cols-3">
                {services.map((srvfn, index) => (
                  <div key={index} className="flex flex-col items-center m-2 p-1">
                    <Image src={srvfn.src} alt={`Imagem para ${srvfn.serviceName}`} width={70} height={70} className="sm:w-32 sm:h-32" />
                    <p>{srvfn.serviceName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="ScrollFade">
          <div className="mx-auto max-w-screen-lg h-full py-16">

            <SlideProjects isFigma={true} position={true} whatProject="eezycare" />


            <SlideProjects isFigma={false} position={false} whatProject="hotel" />

            <SlideProjects isFigma={false} position={true} whatProject="barbearia" />


          </div>
        </div>

        <div id="habilidades" className="ScrollFade">
          <div className="mx-auto max-w-screen-lg py-16">

            <div className="flex justify-center">
              <Title
                fontStyle="font-medium" italic="italic"
                textSize="text-2xl" textColor="primary"
                label="HABILIDADES"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center">

              <div className="html w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 128 128"><path fill="#840090" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z" /><path fill="#A21CAF" d="m64 116.8l36.378-10.086l8.559-95.878H64z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z" /></svg>
                Html 5
              </div>
              <div className="css w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 128 128"><path fill="#840090" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" /><path fill="#A21CAF" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" /></svg>
                Css 3
              </div>
              <div className="javascript w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 128 128"><path fill="#840090" d="M1.408 1.408h125.184v125.185H1.408z" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237" /></svg>
                JavaScript
              </div>
              <div className="typescript w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 256 256"><path fill="#840090" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z" /></svg>
                TypeScript
              </div>
              <div className="react w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 256 228"><path fill="#840090" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" /></svg>
                React.Js
              </div>
              <div className="nextJs w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 512 512"><path fill="#840090" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z" /></svg>
                Next.Js
              </div>
              <div className="tailwindCss w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="45%" height="45%" viewBox="0 0 128 128"><path fill="#840090" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" /></svg>
                TailwindCss
              </div>
              <div className="figma w-full h-32 sm:h-full flex flex-col items-center justify-end font-medium hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="35%" height="35%" viewBox="0 0 256 384"><path fill="#840090" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" /><path fill="#840090" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" /><path fill="#840090" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" /><path fill="#840090" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" /><path fill="#840090" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" /></svg>
                Figma
              </div>

            </div>
          </div>
        </div>

        <div id="contato" className="ScrollFade">
          <div className="mx-auto max-w-screen-lg">
            <div className={`rounded-3xl p-5 ${theme === "dark" ? "bg-blue-950" : "bg-gray-300"}`}>
              <div className="flex justify-center">
                <Title
                  fontStyle="font-medium" italic="italic"
                  textSize="text-2xl" textColor="primary"
                  label="CONTATO"
                />
              </div>
              <div className="w-full text-center text-xl ">Construa seu espaço digital com nossos sites personalizados</div>
              <div className="flex flex-col items-center w-full">
                <div className="">
                  <RedesSociais inName={true} position="center" display="grid" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
