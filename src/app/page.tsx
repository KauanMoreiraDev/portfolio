import Image from "next/image";
import Link from "next/link";

const curriculo = "/images/curriculo_kauan_moreira.pdf"

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

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-primary via-secoundary to-pink-600 h-screen e w-screen flex items-center justify-center">
      <div className="m-1 p-2 z-10 bg-lime-500 border-black border rounded-xl text-center flex flex-col flex-nowrap justify-evenly shadow-2xl w-1/3 h-2/3 max-sm:w-3/5 max-md:w-1/3 max-lg:w-1/3">
        <h1 className="font-Oswald text-3xl">Olá, eu sou o <span className="italic font-semibold">Kauan!</span></h1>
        <h2 className="p-2 font-Oswald font-Regular text-lg">Front-End Development Student</h2>
        <h2 className="p-2 font-Oswald font-medium">HTML | CSS | JS | Next.js | TailwindCSS</h2>
        <h3 className="p-2 font-Oswald font-Regular text-lg">Entre em contato</h3>
        <div className="pt-4 flex flex-row justify-center">
          {contato.map((cttfn, index) => (
            <Link key={index} href={cttfn.link} target="_blank" className="border-lime-500 border-8 rounded-full hover:bg-primary hover:scale-110">
              <Image src={cttfn.image} alt="" width={50} height={50} className="" /></Link>
          ))}
        </div>
      </div>
      <div className="h-1/2">
        <div className="bg-gray-200 flex font-Oswald text-lg w-12 h-10 -ml-1 rounded-r-lg group">Puxe <span className="hidden group-hover:block ml-1 transition duration-1000 bg-gray-200 rounded-r-lg"><Link href={curriculo} target="_blank" className=" font-Oswald font-semibold text-lg hover:underline hover:text-primary pr-2">Currículo</Link></span></div>
      </div>
    </main>
  );
}
