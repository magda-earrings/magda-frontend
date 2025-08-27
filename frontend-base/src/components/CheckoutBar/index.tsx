"use client";

import { useAtomValue } from "jotai";
import { itemAtom } from "@/atoms/itemAtom";

export default function CheckoutBar() {
  const item = useAtomValue(itemAtom);

  const handleCartClick = () => {
    console.log("Item no atom:", item);
  };

  const handleBuyClick = () => {
    console.log("Item no atom:", item);
  };
  return (
    <nav className="bg-[#F79D5C] p-2 sticky bottom-0 z-10">
      <ul className="flex justify-around">
        <li className="w-1/3">
          <button
            onClick={handleCartClick}
            className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-[#EDEDF4] text-primary-100 cursor-pointer hover:scale-105 transition-all"
          >
            Carrinho
          </button>
        </li>
        <li className="w-1/3">
          <button
            onClick={handleBuyClick}
            className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-secondary-100 text-white cursor-pointer hover:scale-105 transition-all"
          >
            Comprar
          </button>
        </li>
      </ul>
    </nav>
  );
}
