"use client";

import { useParams } from "next/navigation";
import ProductImage from "@/components/Product/ProductImage/Index";
import ProductInfo from "@/components/Product/ProductInfo/Index";
import ProductDescription from "@/components/Product/ProductDescription/Index";
import ProductDetails from "@/components/Product/ProductDetails/Index";
import { items } from "./items.js";
import { useState } from "react";

export default function Item() {
  const { id } = useParams(); // take id from the route /item/[id]
  const itemId = Number(id); // convert to number if your items use numeric id
  const item = items.find((i) => i.id === itemId);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!item) {
    return <div className="m-auto mt-16 text-2xl text-primary-100">Item não encontrado</div>;
  }

  return (
    <section className="flex flex-col lg:flex-row">
      <ProductImage src={item.image} />
      <section className="p-6 gap-6 flex flex-col">
        <ProductInfo
          colors={item.colors}
          itemName={item.name}
          itemValue={item.value}
          onClick={(color) => setSelectedColor(color)}
          selectedColor={selectedColor}
        />
        <hr className="border-t-2 border-[#00000080]" />
        <ProductDescription description={item.description} />
        <hr className="border-t-2 border-[#00000080]" />
        <ProductDetails details={item.details} />
      </section>
    </section>
  );
}
