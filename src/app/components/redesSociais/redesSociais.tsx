import Image from "next/image";
import Link from "next/link";

export default function RedesSociais() {

const contato = [{
    nome: "Linkein",
    link: "https://www.linkedin.com/in/kauan-moreira-a5449426a/",
    image: "/images/linkedin.png",
    imageHover: "/images/linkedinRoxo.png",
  },
  {
    nome: "Git Hub",
    link: "https://github.com/KauanMoreiraDev",
    image: "/images/github.png",
    imageHover: "/images/githubRoxo.png",
  },
  {
    nome: "Instagram",
    link: "https://instagram.com/kauannmoreira_",
    image: "/images/instagram.png",
    imageHover: "/images/instagramRoxo.png",
  },
  {
    nome: "Email",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=kauanmoreira457@gmail.com&tf=cm",
    image: "/images/o-email.png",
    imageHover: "/images/o-emailRoxo.png",
  }]

  return (
    <div className="w-full h-full">
      <div className="hidden sm:block">
      <div className="flex flex-col items-center space-y-3 py-2 p-1">
          {contato.map((cttfn, index) => (
            <Link key={index} href={cttfn.link} target="_blank" className="rounded-full hover:bg-primary hover:scale-110">
              <Image src={cttfn.image} alt={cttfn.nome} width={40} height={40} className="" /></Link>
          ))}
        </div>
        </div>
      <div className="flex flex-row justify-center gap-3 p-1 sm:hidden ">
          {contato.map((cttfn, index) => (
            <Link key={index} href={cttfn.link} target="_blank" className="rounded-full hover:bg-primary hover:scale-110">
              <Image src={cttfn.image} alt={cttfn.nome} width={40} height={40} className="" /></Link>
          ))}
        </div>
      </div>
  );
}