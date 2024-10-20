"use client";

import AgeCard from "@/components/cards/age";
import CountriesCard from "@/components/cards/countries";
import DeathsCard from "@/components/cards/deaths";
import PoliticsCard from "@/components/cards/politics";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Speech } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <header className="bg-primary flex w-full justify-between items-center px-5">
        <Image src="/logo-text.png" alt="Fumaça Zero" width={139} height={80} />
        <Button onClick={() => router.push("/testimonials")} className="bg-none text-foreground text-sm font-medium border-foreground py-4 rounded-full">
          <Speech className="h-6 w-6 text-forground mr-2" /> Depoimentos
        </Button>
      </header>
      <main className="p-8 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold">Dados</h1>
          <p>Veja todos os dados sobre tabagismo para se conscientizar!</p>
        </div>
        <ul className="flex flex-col gap-4">
          <AgeCard />
          <DeathsCard />
          <CountriesCard />
          <PoliticsCard />
        </ul>
      </main>
      <Footer/>
    </>
  );
}
