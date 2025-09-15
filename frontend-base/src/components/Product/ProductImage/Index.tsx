"use client";
import Image from "next/image";

export default function ProductImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Product Image"
      width={380}
      height={380}
      className={`rounded-b-[20px] lg:rounded-[20px] max-w-120 w-full shadow-md shadow-[#00000040]`}
    />
  );
}
