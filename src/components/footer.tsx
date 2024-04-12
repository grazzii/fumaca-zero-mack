"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-primary flex w-full justify-between items-center p-5">
    <Image src="/logo-text.png" alt="Fumaça Zero" width={139} height={80} />
    <div className="flex flex-col items-end">
        <p>Desenvolvido por:</p>
        <p>Graziely Severo (RA: 10425431)</p>
        <p>Luis Felipe (RA: 10420572)</p>
        <p>Marcos Minhano (RA: 10428577)</p>
    </div>
    </footer>
  );
}
