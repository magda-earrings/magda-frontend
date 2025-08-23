import Image from "next/image";
import { Icon } from "@iconify/react";

export const Product = ({
  image,
  name,
  price,
  onClick,
}: {
  image: string;
  name: string;
  price: number;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className=" w-[45%] rounded-[20px] overflow-hidden shadow-md shadow-[#00000040] relative cursor-pointer"
    >
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="w-full h-auto"
      />
      <div className="flex flex-col items-center bg-secondary-100 text-[#EDEDF4] text-lg">
        <h2>{name}</h2>
        <p>R$ {price}</p>
      </div>
      <Icon
        className="absolute top-3 right-3 text-xl text-secondary-100"
        icon="tabler:heart-filled"
      />
    </div>
  );
};
