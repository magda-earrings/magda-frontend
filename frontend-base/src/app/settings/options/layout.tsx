"use client";
import { usePathname } from "next/navigation";
import { OptionsNavigator } from "@/components/Navigator/Index";

export default function OptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // pega o path inteiro
  const parts = pathname.split("/"); // divide em segmentos
  const lastSegment = parts[parts.length - 1]; // pega o último (ex: "general")

  const titles: Record<string, string> = {
    contact: "Fale Conosco",
    social: "Redes Sociais",
    "about-us": "Sobre Nós",
    terms: "Termos de Uso",
    purchased: "Compras",
    general: "Configurações Gerais",
    profile: "Perfil",
  };

  return (
    <div>
      <OptionsNavigator option={lastSegment} titles={titles} />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}


