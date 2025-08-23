import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Page() {
  const products = [
    {
      id: 1,
      image: "https://picsum.photos/200/200?random=1",
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      image: "https://picsum.photos/200/200?random=2",
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      image: "https://picsum.photos/200/200?random=3",
      name: "Product 3",
      price: 300,
    },
    {
      id: 4,
      image: "https://picsum.photos/200/200?random=4",
      name: "Product 4",
      price: 400,
    },
    {
      id: 5,
      image: "https://picsum.photos/200/200?random=1",
      name: "Product 1",
      price: 100,
    },
    {
      id: 6,
      image: "https://picsum.photos/200/200?random=2",
      name: "Product 2",
      price: 200,
    },
    {
      id: 7,
      image: "https://picsum.photos/200/200?random=3",
      name: "Product 3",
      price: 300,
    },
    {
      id: 8,
      image: "https://picsum.photos/200/200?random=4",
      name: "Product 4",
      price: 400,
    },
  ];

  return (
    <div className="text-black flex flex-wrap justify-between gap-5 gap-y-10 py-10">
      {products.map((item) => (
        <Product
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export const Product = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: number;
}) => {
  return (
    <div className=" w-[45%] rounded-[20px] overflow-hidden shadow-md shadow-gray-500 relative">
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
      <Icon className="absolute top-3 right-3 text-xl text-secondary-100" icon="tabler:heart-filled" />
    </div>
  );
};
