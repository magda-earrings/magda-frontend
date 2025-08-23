"use client";

import ProductImage from "@/components/Product/ProductImage/Index";
import ProductInfo from "@/components/Product/ProductInfo/Index";
import ProductDescription from "@/components/Product/ProductDescription/Index";
import ProductDetails from "@/components/Product/ProductDetails/Index";

export default function Item() {
  return (
    <section className="flex flex-col">
      <ProductImage src="https://picsum.photos/200/200?random=1" />
      <section className="p-6 gap-6 flex flex-col">
        <ProductInfo />
        <hr className="border-t-2 border-[#00000080]" />
        <ProductDescription />
        <hr className="border-t-2 border-[#00000080]" />
        <ProductDetails />
      </section>
    </section>
  );
}
