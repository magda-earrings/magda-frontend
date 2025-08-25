"use client";
import { usePathname } from "next/navigation";
import { OptionsNavigator } from "@/components/Navigator/Index";

export default function OptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // take all the path
  const parts = pathname.split("/"); // split into segments
  const lastSegment = parts[parts.length - 1]; // get the last one (ex: "contact")

  const titles: Record<string, string> = {
    contact: "Fale Conosco",
    social: "Redes Sociais",
  };

  return (
    <div>
      <OptionsNavigator option={lastSegment} titles={titles} />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}


