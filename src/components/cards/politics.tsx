"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PoliticsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Políticas Públicas</CardTitle>
                <CardDescription>
                    <ol start={1} className="list-decimal pl-4 py-2">
                        <li>Início das campanhas anuais de controle do tabaco (1986)</li>
                        <li>Uso de advertências sanitárias em produtos derivados do tabaco (Lei nº 9.294/1996)</li>
                        <li>Restrições a anúncios publicitários (Lei nº 9.294/1996)</li>
                        <li>Proibição de fumar em recintos específicos fechados (Lei nº 9.294/1996)</li>
                        <li>Divulgação do “Disque pare de fumar” nos maços de cigarro (2001)</li>
                        <li>Instituição de tratamento para fumantes na rede pública (2003)</li>
                        <li>Proibição da venda de cigarros avulsos (2004)</li>
                        <li>Ampliação das restrições à propaganda de produtos derivados do tabaco (Lei nº 12.546/2011)</li>
                        <li>Aumento do imposto sobre produtos derivados do tabaco (2014)</li>
                        <li>Campanha nacional "Lar sem Fumaça" (2019)</li>
                    </ol>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
