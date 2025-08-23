"use client";
import Image from "next/image";

export default function Item() {
  return (
    <section className="flex flex-col ">
      <Image
        src="https://picsum.photos/200/200?random=1"
        alt="Product Image"
        width={380}
        height={380}
        className="rounded-b-[20px] w-full shadow-md shadow-[#00000040]"
      />
      <section className="p-6 gap-6 flex flex-col">
        <div className="flex justify-around">
          <div className="flex flex-col items-start w-1/2 gap-2">
            <div className="text-2xl">Descrição</div>
            <div className="text-secondary-100 font-bold text-3xl">10,00</div>
            <div>cores::</div>
          </div>
          <div className="w-1/2">avaliações</div>
        </div>
        <hr className="border-t-2 border-[#00000080] " />
        <div className="flex flex-col gap-4 text-xl">
          <h2 className="font-bold">Descrição</h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
            perferendis nemo quisquam minus veritatis similique aperiam omnis
            recusandae eos hic vel deserunt qui at repellendus quis, officia
            ullam possimus!
          </p>
        </div>
        <hr className="border-t-2 border-[#00000080] " />
        <div className="flex flex-col gap-4 text-xl">
          <h2 className="font-bold">Detalhes do Produto</h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
          </p>
        </div>
      </section>
    </section>
  );
}
