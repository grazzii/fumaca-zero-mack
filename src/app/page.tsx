import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-primary flex w-full justify-between items-center px-5">
        <Image src="/logo-text.png" alt="Fumaça Zero" width={139} height={80} />
        <Menu className="h-9 w-9 text-forground" />
      </header>
      <main className="p-5">
        <Card>
          <CardHeader>
            <CardTitle>20 à 49 anos</CardTitle>
            <CardDescription>
              A faixa etária com maior prevalência de fumantes no Brasil é dos 20 aos 49 anos. A proporção de homens é maior em todas as faixas etárias quando comparado às mulheres.
              <br /><br /><a href="https://www.scielo.br/j/reeusp/a/6W7B3LVL75M8RhdjjWRksVG/#:~:text=A%20faixa%20etária%20com%20maior,etárias%20quando%20comparado%20às%20mulheres" target="_blank" rel="noopener noreferrer">Segundo pesquisa.</a>
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    </>
  );
}
