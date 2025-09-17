"use client";

import Image from "next/image";
import { useState } from "react";

const carouselImages = [
  "/images/about-us-carrousel-1.png",
  "/images/about-us-carrousel-2.png",
  "/images/about-us-carrousel-3.png",
  "/images/about-us-carrousel-4.png",
  "/images/about-us-carrousel-5.png",
  "/images/about-us-carrousel-6.png",
];

export default function AboutPage() {
  return (
    <section className="p-4 flex flex-col gap-10">
      <h2 className="text-3xl font-bold text-white text-center py-10">
        Seja bem vindo a Magdá
      </h2>
      <hr className="text-white" />

      <p className="text-white text-[24px] text-center">A <span className="text-red-800">Magdá</span> nasceu de um amor que vai além do tempo. O nome é uma homenagem à <span className="text-red-800">Magdalena</span>, minha avó, que sempre me ensinou a acreditar em mim mesma e a seguir com fé e coragem. Ela se tornou a <span className="text-red-800">inspiração</span> para transformar esse carinho em algo maior: uma marca feita para celebrar o <span className="text-red-800">amor, a força e a união.</span></p>

      <hr className="text-white" />

      <Carousel />

      <hr className="text-white" />

      <p className="text-white text-[24px] text-center">Nossa primeira coleção, <span className="text-red-800">DNA</span>, carrega a essência de <span className="text-red-800">12 mulheres</span> da minha família que me inspiram todos os dias — mães, tias, irmãs, primas e, claro, <span className="text-red-800">minha vó</span>. Cada peça trás em si essa energia de confiança, cuidado e afeto.</p>

      <hr className="text-white" />

      <p className="text-white text-[24px] text-center">A <span className="text-red-800">Magdá</span> nasceu como uma forma autêntica de se expressar, unindo geometria e cores que revelam quem você é. Os brincos sempre foram meu ponto de expressão — texturas, formas e tonalidades que refletiam cada fase e momento da minha vida.</p>

      <hr className="text-white" />

      <p className="text-red-800 font-bold text-[30px] text-center">Quando decidi criar algo meu, sabia que precisava ser verdadeiro, algo que realmente me representasse. Por isso, não poderia ser diferente:</p>

      <DoubleSection img="/images/about-us-1.png" text="brincos coloridos" />
      <DoubleSection2 img="/images/about-us-2.png" text="ousados e excêntricos" />
      <DoubleSection img="/images/about-us-3.png" text="feitos para nunca passarem despercebidos" />
      <DoubleSection2 img="/images/about-us-4.png" text="afinal, a Magdá é para quem não tem medo de ser único" />

      <hr className="text-white" />

      <p className="text-red-800 font-bold text-[30px] text-center">Porque do comum já existe demais</p>

      <div className="flex gap-2 justify-center items-center">
        <Image
          src="/images/about-us-5.png"
          alt="Magda Brincos"
          width={200}
          height={0}
        />
        <Image
          src="/images/about-us-6.png"
          alt="Magda Brincos"
          width={200}
          height={0}
        />
      </div>

      <p className="text-red-800 font-bold text-[26px] text-center">Clique aqui e inicie este processo!</p>

    </section>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((current + 1) % carouselImages.length);

  return (
    <div className="flex flex-col items-center gap-4 my-5">
      <div className="relative w-full flex justify-center">
        <Image
          src={carouselImages[current]}
          alt={`Magda Brincos ${current + 1}`}
          width={800}
          height={600}
          className="mx-auto rounded-lg"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-800 text-white px-3 py-1 rounded-full shadow"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-800 text-white px-3 py-1 rounded-full shadow"
          aria-label="Próximo"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 justify-center">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-red-800" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function DoubleSection({img, text}: {img: string, text: string}) {
  return (
    <div className="flex gap-5 md:gap-10 items-center justify-center h-fit">
      <img src={img} alt="" className="w-1/2 max-w-[200px]" />
      <div className="p-5 text-sm text-center bg-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center shadow-md shadow-black/50">
        <p className="text-primary-100 text-shadow-black/50 text-shadow-sm text-[24px]">{text}</p>
      </div>
    </div>
  )
}

function DoubleSection2({img, text}: {img: string, text: string}) {
  return (
    <div className="flex gap-5 md:gap-10 items-center justify-center h-fit">
      <div className="p-5 text-sm text-center bg-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center shadow-md shadow-black/50">
        <p className="text-primary-100 text-shadow-black/50 text-shadow-sm text-[24px]">{text}</p>
      </div>
      <img src={img} alt="" className="w-1/2 max-w-[200px]" />
    </div>
  )
}
