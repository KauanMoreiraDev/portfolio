import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-row justify-between items-center">
                    <div className="bg-lime-500 w-10 h-10"></div>
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
