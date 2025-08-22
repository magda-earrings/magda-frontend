import { Icon } from "@iconify/react";
import magdaIcon from '/public/images/magda-icon.svg';
import Image from "next/image";

export function Navigator() {
  return (
    <nav className="bg-primary-100 w-full rounded-t-xl text-white py-3 fixed bottom-0">
      <ul className="flex justify-around text-4xl px-4 gap-4 items-center">
        <li>
          <Icon className="shadow-2xl shadow-black" icon="solar:home-angle-2-bold" />
        </li>
        <li className="w-full">
          <div className="flex bg-white text-gray-500 items-center p-1 text-3xl rounded-2xl ">
            <input type="text" className="z-10 outline-none w-full text-xl pl-1" />
            <Icon icon="tabler:zoom" />
          </div>
        </li>
        <li>
          <Icon icon="mdi:cart" />
        </li>
      </ul>
    </nav>
  );
}

export function UpperNavigator(){
    return(
        <nav className="bg-primary-100 w-full rounded-b-xl text-white pt-12 pb-2 static top-0">
          <ul className="flex justify-between text-4xl px-4 gap-4 items-center">
            <li>
              <Icon className="shadow-2xl shadow-black" icon="solar:home-angle-2-bold" />
            </li>
            <li >
              <Image src={magdaIcon} alt="Magda Logo" className="" />
            </li>
            <li>
              <Icon icon="mdi:cart" />
            </li>
          </ul>
        </nav>
    )
}
