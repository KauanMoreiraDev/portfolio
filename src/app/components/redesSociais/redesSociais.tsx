import Image from "next/image";
import Link from "next/link";

interface contatoProps {
  inName: boolean
  position: "center" | "start"
}

export default function RedesSociais({ inName, position = "center" }: contatoProps) {

  const contato = [{
    nome: "Linkein",
    nickName: "Kauan Moreira",
    link: "https://www.linkedin.com/in/kauan-moreira-a5449426a/",
    image: "/images/linkedin.png",
  },
  {
    nome: "Git Hub",
    nickName: "@kauanmoreiradev_",
    link: "https://github.com/KauanMoreiraDev",
    image: "/images/github.png",
  },
  {
    nome: "Instagram",
    nickName: "@kauannmoreira_",
    link: "https://instagram.com/kauannmoreira_",
    image: "/images/instagram.png",
  },
  {
    nome: "Email",
    nickName: "kauanmoreira457@gmail.com",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=kauanmoreira457@gmail.com&tf=cm",
    image: "/images/o-email.png",
  }]

  return (
    <div className="w-full h-full">

      <div className="Deskto">
        <div className="hidden sm:block">
          <div className="flex flex-col items-start space-y-3 py-2 p-1">
            {contato.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" className="hover:scale-110">
                <div className={`flex flex-row ${position === "center" ? "items-center" : "items-start" }`}>
                  <Image src={item.image} alt={item.nome} width={40} height={40} className="hover:bg-primary rounded-full" />
                  <div className="flex flex-col items-start font-medium">
                    <span className="px-2 text-primary">{inName ? item.nome : ""}</span>
                    <span className="px-2 text-sm">{inName ? item.nickName : ""}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="Mobile">
        <div className="flex flex-row justify-center gap-3 p-1 sm:hidden ">
          {contato.map((item, index) => (
            <Link key={index} href={item.link} target="_blank" className="hover:scale-110">
              <div className={`flex flex-row ${position === "center" ? "items-center" : "items-start" }`}>
                <Image src={item.image} alt={item.nome} width={40} height={40} className="hover:bg-primary rounded-full" />
                <span className="px-2">{inName ? item.nome : ""}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}