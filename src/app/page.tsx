"use client";

import AgeCard from "@/components/cards/age";
import CountriesCard from "@/components/cards/countries";
import DeathsCard from "@/components/cards/deaths";
import PoliticsCard from "@/components/cards/politics";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-primary flex w-full justify-between items-center px-5">
        <Image src="/logo-text.png" alt="Fumaça Zero" width={139} height={80} />
        <Menu className="h-9 w-9 text-forground" />
      </header>
      <main className="p-8 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold">Dados</h1>
          <p>Veja dados sobre tabagismo para se conscientizar!</p>
        </div>
        <ul className="flex flex-col gap-4">
          <AgeCard />
          <DeathsCard />
          <CountriesCard />
          <PoliticsCard />
        </ul>
      </main>
      <footer className="bg-primary flex w-full justify-between items-center p-5">
        <Image src="/logo-text.png" alt="Fumaça Zero" width={139} height={80} />
        <div className="flex flex-col items-end">
          <p>Desenvolvido por:</p>
          <p>Graziely Severo (RA: 10425431)</p>
          <p>Luis Felipe (RA: 10420572)</p>
          <p>Marcos Minhano (RA: 10428577)</p>
        </div>
      </footer>
    </>
  );
}
