import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-row justify-between items-center">
                    <Image src={"/favicon.png"} alt="" width={40} height={40} />
                    <nav className="text-white">
                        <div className="space-x-6">
                            <Link href={'#'}>Início</Link>
                            <Link href={'#'}>Sobre mim</Link>
                            <Link href={'#'}>Habilidades</Link>
                            <Link href={'#'}>Portfólio</Link>
                            <Link href={'#'}>Serviços</Link>
                            <Link href={'#'}>Contato</Link>
                        </div>
                    </nav>
                </div>
                </div>
        </header>
    );
}
