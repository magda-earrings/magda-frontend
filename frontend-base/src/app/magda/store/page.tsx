"use client"
import { useRouter } from "next/navigation";
import { Product } from "@/components/Product/ProductCard/Index";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

export default function Page() {
  const router = useRouter();

  const navigate = (id: number) => {
    router.push(`/item/${id}`);
  };
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
          onClick={() => navigate(item.id)}
        />
      ))}
    </div>
  );
}
