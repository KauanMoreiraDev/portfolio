import Data from "../data/data.json";
import Image from "next/image";
import Link from "next/link";

interface contatoProps {
  inName: boolean
  position?: "center" | "start",
  display?: "flex" | "grid",
}

export default function RedesSociais({ inName, position = "center", display = "flex" }: contatoProps) {

  const { contato } = Data

  return (
    <div className="w-full h-full">

      <div className="Deskto">
        <div className="hidden sm:block">
          <div className="py-3">
            <div className={`${display === "flex" ? "flex flex-col items-center" : "grid grid-cols-2"} gap-3`}>
              {contato.map((item, index) => (
                <Link key={index} href={item.link} target="_blank" className="hover:scale-110">
                  <div className={`flex flex-row ${position === "center" ? "items-center" : "items-start"}`}>
                    <Image src={item.image} alt={item.nome} width={40} height={40} className="hover:bg-primary rounded-full" />
                    <div className="flex flex-col items-start font-medium">
                      <span className={`text-primary ${inName ? "px-2" : ""}`}>{inName ? item.nome : ""}</span>
                      <span className={`text-sm ${inName ? "px-2" : ""}`}>{inName ? item.nickName : ""}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="Mobile">
          <div className={`${display === "flex" ? "flex flex-row" : "grid grid-cols-2"} gap-3 p-1 sm:hidden`}>
            {contato.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" className="hover:scale-110">
                <div className={`flex flex-col ${position === "center" ? "items-center" : "items-start"}`}>
                  <Image src={item.image} alt={item.nome} width={40} height={40} className="hover:bg-primary rounded-full" />
                  <div className="flex flex-col items-center font-medium">
                    <span className={`text-primary ${inName ? "px-2" : ""}`}>{inName ? item.nome : ""}</span>
                    <span className={`text-sm ${inName ? "px-2" : ""}`}>{inName ? item.nickName : ""}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}