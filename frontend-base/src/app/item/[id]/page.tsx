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
  // Get the "id" parameter from the route (/item/[id])
  const { id } = useParams();
  const itemId = Number(id);

  // Find the item from the items array by id
  const item = items.find((i) => i.id === itemId);

  // Local state to track the currently selected color
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Jotai atom to store the selected item and color globally
  const [, setItem] = useAtom(itemAtom);

  // Initialize the atom and selectedColor when the item loads
  useEffect(() => {
    if (!item) return;

    // Default to the first color if available
    const initialColor = item.colors[0] || null;

    setSelectedColor(initialColor);

    setItem({
      nome: item.name,
      cor: initialColor,
    });
  }, [item, setItem]);

  // If the item does not exist, show a "not found" message
  if (!item) {
    return (
      <div className="m-auto mt-16 text-2xl text-primary-100">
        Item not found
      </div>
    );
  }

  // Handle when a color is selected
  const handleSelectColor = (color: string) => {
    setSelectedColor(color);

    // Update the atom with the selected color
    setItem((prev) =>
      prev ? { ...prev, cor: color } : { nome: item.name, cor: color }
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
