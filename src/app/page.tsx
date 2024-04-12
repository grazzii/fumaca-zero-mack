"use client";

import AgeCard from "@/components/cards/age";
import CountriesCard from "@/components/cards/countries";
import DeathsCard from "@/components/cards/deaths";
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
          <AgeCard/>
          <DeathsCard/>
          <CountriesCard/>
        </ul>
      </main>
    </>
  );
}
