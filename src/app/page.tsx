import RedesSociais from "./components/redesSociais/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-950 font-Oswald font-light">
      <div className="w-screen-lg h-screen">
        <div className="mx-auto max-w-screen-lg p-2">
          <div className="flex items-center">
            <div className="bg-slate-500 w-1/12 h-full">
              <RedesSociais />
            </div>
            <div className="bg-slate-900 w-4/6 h-full">
              <div className="flex flex-col space-y-7 p-3">
                <div className="text-purple-900 text-2xl font-medium italic">Quem é Kauan Moreira?</div>
                <div className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quas quis commodi quia delectus ipsum. Ducimus veritatis soluta blanditiis facilis ipsum explicabo ratione possimus quasi nemo eos. Officiis, laudantium fugit.
                  Repudiandae, expedita inventore pariatur maxime beatae sapiente porro laboriosam consequuntur at, corporis totam dicta velit, nisi eum! Quidem voluptatum recusandae temporibus, minus porro nobis fugiat ut fuga a numquam dicta?</div>
              </div>
            </div>
            <div className=" max-w-full h-full">
              <div className="bg-gradient-to-bl from-pink-500 via-purple-700 to-purple-900">
              <Image src="/images/kauan00.png" alt="" width={250} height={250} className="w-full h-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
