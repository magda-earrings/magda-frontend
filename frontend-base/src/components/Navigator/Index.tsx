"use client";
import { Icon } from "@iconify/react";
import magdaIcon from "/public/images/magda-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function Navigator({ className }: { className?: string }) {
  const router = useRouter();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);
  return (
    <nav
      className={`bg-primary-100 w-full rounded-t-xl text-white py-3 sticky bottom-0 ${className}`}
    >
      <ul className="flex justify-around text-4xl px-4 gap-4 items-center">
        <li>
          <Icon
            onClick={() => router.push("/magda/store")}
            className="shadow-2xl shadow-black cursor-pointer"
            icon="solar:home-angle-2-bold"
          />
        </li>
        <li className="w-full">
          <div className="flex bg-white text-gray-500 items-center p-1 text-3xl rounded-2xl">
            <input
              type="text"
              className="z-10 outline-none w-full text-xl pl-1"
              placeholder="Buscar..."
            />
            <Icon icon="tabler:zoom" />
          </div>
        </li>
        <li className="relative">
          {cartCount > 0 && (
            <div className="absolute -top-2 -right-3 text-sm w-5 h-5 text-center rounded-full bg-white text-primary-100 font-bold">
              {cartCount}
            </div>
          )}
          <Icon
            onClick={() => router.push("/cart")}
            className="cursor-pointer"
            icon="mdi:cart"
          />
        </li>
      </ul>
    </nav>
  );
}

export function UpperNavigator() {
  const router = useRouter();

  return (
    <nav className="bg-secondary-100 w-full rounded-b-xl text-white pt-12 pb-2 sticky z-10 top-0">
      <ul className="flex justify-between text-4xl px-4 gap-4 items-center">
        <li>
          <Icon
            onClick={() => router.push("/settings")}
            className="cursor-pointer"
            icon="material-symbols:settings-rounded"
          />
        </li>
        <li>
          <Image src={magdaIcon} alt="Magda Logo" />
        </li>
        <li>
          {/* <Icon
            onClick={() => router.push("/profile")}
            className="cursor-pointer"
            icon="mingcute:user-2-fill"
          /> */}
        </li>
      </ul>
    </nav>
  );
}

export const OptionsNavigator = ({
  option,
  titles,
}: {
  option: string;
  titles: Record<string, string>;
}) => {
  const router = useRouter();
  return (
    <nav className="bg-secondary-100 grid grid-cols-3 items-center p-4 my-10">
      <Icon
        onClick={() => router.back()}
        icon="mingcute:arrow-left-line"
        className="text-white w-10 h-10 col-span-1 cursor-pointer"
      />

      <h2 className="text-2xl font-bold text-white text-center col-span-1 whitespace-nowrap">
        {titles[option] ?? option}
      </h2>
    </nav>
  );
};
