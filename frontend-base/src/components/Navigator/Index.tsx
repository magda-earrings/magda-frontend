"use client";
import { Icon } from "@iconify/react";
import magdaIcon from "/public/images/magda-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navigator({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <nav className={`bg-primary-100 w-full rounded-t-xl text-white py-3 sticky bottom-0 ${className}`}>
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
        <li>
          <Icon
            onClick={() => router.push("/magda/cart")}
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
            onClick={() => router.push("/magda/settings")}
            className="cursor-pointer"
            icon="material-symbols:settings-rounded"
          />
        </li>
        <li>
          <Image src={magdaIcon} alt="Magda Logo" />
        </li>
        <li>
          <Icon
            onClick={() => router.push("/magda/profile")}
            className="cursor-pointer"
            icon="mingcute:user-2-fill"
          />
        </li>
      </ul>
    </nav>
  );
}
