"use client";
import { useRouter } from "next/navigation";
import { Product } from "@/components/Product/ProductCard/Index";
import { products } from "./products.js";

export default function Page() {
  const router = useRouter();

  const navigate = (id: number) => {
    router.push(`/item/${id}`);
  };

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
