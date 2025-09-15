"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";

import ProductImage from "@/components/Product/ProductImage/Index";
import ProductInfo from "@/components/Product/ProductInfo/Index";
import ProductDescription from "@/components/Product/ProductDescription/Index";
import ProductDetails from "@/components/Product/ProductDetails/Index";
import { items } from "./items.js";
import { itemAtom } from "@/atoms/itemAtom";

export default function Item() {
  const { id } = useParams();
  const itemId = Number(id);

  const item = items.find((i) => i.id === itemId);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [, setItem] = useAtom(itemAtom);

  useEffect(() => {
    if (!item) return;

    const initialColor = item.colors[0];
    setSelectedColor(initialColor);

    setItem({
      nome: item.name,
      cor: initialColor,
      valor: Number(item.value),
      img: item.image,
      quantidade: 1,
    });
  }, [item, setItem]);

  if (!item) {
    return (
      <div className="m-auto mt-16 text-2xl text-primary-100">
        Item not found
      </div>
    );
  }

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);

    setItem((prev) =>
      prev
        ? { ...prev, cor: color }
        : {
            nome: item.name,
            cor: color,
            valor: Number(item.value),
            img: item.image,
            quantidade: 1,
          }
    );
  };

  return (
    <section className="flex flex-col lg:flex-row lg:m-auto">
      <ProductImage src={item.image} />
      <section className="p-6 gap-6 flex flex-col">
        <ProductInfo
          colors={item.colors}
          itemName={item.name}
          itemValue={item.value}
          onClick={handleSelectColor}
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
