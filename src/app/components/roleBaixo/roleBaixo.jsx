import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";



export default function roleBaixo() {
    return(
        <div className="m-3 flex flex-row gap-2 animate-bounce"><Image src={'/images/rato.png'} alt="mouse, rato" width={30} height={30}/>  role para baixo <DoubleArrowDownIcon className="mt-2"/></div>
    );
}

