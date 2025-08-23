"use client"
import CheckoutBar from "@/components/CheckoutBar/index";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function ItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const navigate = () => {
    router.push("/magda/store");
  };

  return (
    <>
      <Icon
        onClick={navigate}
        icon="mingcute:arrow-left-line"
        className="rounded-full w-fit text-4xl absolute top-3 left-3 bg-primary-100 p-1 text-white cursor-pointer"
      />
      <div className="flex flex-col min-h-screen bg-[#EDEDF4]">{children}</div>
      <CheckoutBar />
    </>
  );
}
