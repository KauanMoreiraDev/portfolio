import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const contato = [{
  link: "linkedin",
  image: "/images/linkedin.png",
  imageHover: "/images/linkedinRoxo.png",
},
{
  link: "https://github.com/KauanMoreiraDev",
  image: "/images/github.png",
  imageHover: "/images/githubRoxo.png",
},
{
  link: "https://instagram.com/kauannmoreira_",
  image: "/images/instagram.png",
  imageHover: "/images/instagramRoxo.png",
},
{
  link: "kauanmoreira457@gmail.com",
  image: "/images/o-email.png",
  imageHover: "/images/o-emailRoxo.png",
}]

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-primary via-secoundary to-pink-600 h-screen e w-screen flex items-center justify-center">
      <div className="bg-lime-500 rounded-xl text-center flex flex-col flex-nowrap justify-evenly shadow-2xl w-1/3 h-2/3 max-sm:w-3/5 max-md:w-1/3 max-lg:w-1/3">
        <h1 className="font-Oswald text-3xl">Olá, eu sou o <span className="italic font-semibold">Kauan!</span></h1>
        <h2 className="p-2 font-Oswald font-Regular text-lg">Front-End Development Student</h2>
        <h2 className="p-2 font-Oswald font-medium">HTML | CSS | JS | Next.js | TailwindCSS</h2>
        <h3 className="p-2 font-Oswald font-Regular text-lg">Entre em contato</h3>
        <div className="pt-4 flex flex-row justify-center">
          {contato.map((cttfn, index) => (
            <Link key={index} href={cttfn.link} target="_blank">
              <Image className="p-1 m-1" src={cttfn.image} alt="" width={50} height={50} /></Link>
          ))}
        </div>
      </div>
    </main>
  );
}
