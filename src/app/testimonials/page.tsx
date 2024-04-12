"use client";

import AgeCard from "@/components/cards/age";
import CountriesCard from "@/components/cards/countries";
import DeathsCard from "@/components/cards/deaths";
import PoliticsCard from "@/components/cards/politics";
import TestimonialCard from "@/components/cards/testimonial";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <header className="bg-primary flex w-full justify-between items-center px-5">
        <Image onClick={() => router.push("/")} src="/logo-text.png" alt="Fumaça Zero" width={139} height={80} />
        <Button onClick={() => router.push("/")} className="bg-none text-foreground text-sm font-medium border-foreground py-4 rounded-full">
          <HomeIcon className="h-6 w-6 text-forground mr-2" /> Início
        </Button>
      </header>
      <main className="p-8 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold">Depoimentos</h1>
          <p>Veja relatos de ex-fumantes e se inspire!</p>
        </div>
        <ul className="flex flex-col gap-4">
          <TestimonialCard
            image="/f1.jpeg"
            name="Rodrigo"
            age={42}
            text="Hoje, faz 5 anos que não fumo mais. Minha saúde melhorou muito. Respiro melhor, tenho mais energia, e me sinto muito mais disposto."
          />
          <TestimonialCard
            image="/f2.jpeg"
            name="Izabelle"
            age={28}
            text="Parar de fumar foi a melhor decisão que tomei na minha vida. Se você está pensando em parar, não desista. É possível!"
          />
          <TestimonialCard
            image="/f3.jpeg"
            name="Antônio"
            age={62}
            text="A verdade é que o cigarro me controlava. Eu era escravo da nicotina. Tossia constantemente, tinha falta de ar, e vivia com medo de doenças."
          />
        </ul>
      </main>
      <Footer/>
    </>
  );
}
