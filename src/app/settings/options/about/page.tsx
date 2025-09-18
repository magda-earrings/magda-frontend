"use client";

import Image from "next/image";
import { useRef, useState } from "react";

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
      <Image
        src="/images/magda-icon.svg"
        alt="Logotipo Magdá"
        width={300}
        height={0}
        priority
        className="mx-auto"
      />
      <h2 className="text-3xl font-bold text-white text-center py-10">
        Seja bem vindo a Magdá
      </h2>
      <hr className="text-white" />

      <p className="text-white text-[24px] text-center">
        A <span className="text-red-800">Magdá</span> nasceu de um amor que vai
        além do tempo. O nome é uma homenagem à{" "}
        <span className="text-red-800">Magdalena</span>, minha avó, que sempre
        me ensinou a acreditar em mim mesma e a seguir com fé e coragem. Ela se
        tornou a <span className="text-red-800">inspiração</span> para
        transformar esse carinho em algo maior: uma marca feita para celebrar o{" "}
        <span className="text-red-800">amor, a força e a união.</span>
      </p>

      <hr className="text-white" />

      <Carousel />

      <hr className="text-white" />

      <p className="text-white text-[24px] text-center">
        Nossa primeira coleção, <span className="text-red-800">DNA</span>,
        carrega a essência de <span className="text-red-800">12 mulheres</span>{" "}
        da minha família que me inspiram todos os dias — mães, tias, irmãs,
        primas e, claro, <span className="text-red-800">minha vó</span>. Cada
        peça trás em si essa energia de confiança, cuidado e afeto.
      </p>

      <hr className="text-white" />

      <p className="text-white text-[24px] text-center">
        A <span className="text-red-800">Magdá</span> nasceu como uma forma
        autêntica de se expressar, unindo geometria e cores que revelam quem
        você é. Os brincos sempre foram meu ponto de expressão — texturas,
        formas e tonalidades que refletiam cada fase e momento da minha vida.
      </p>

      <hr className="text-white" />

      <p className="text-red-800 font-bold text-[30px] text-center">
        Quando decidi criar algo meu, sabia que precisava ser verdadeiro, algo
        que realmente me representasse. Por isso, não poderia ser diferente:
      </p>

      <DoubleSection img="/images/about-us-1.png" text="brincos coloridos" />
      <DoubleSection2
        img="/images/about-us-2.png"
        text="ousados e excêntricos"
      />
      <DoubleSection
        img="/images/about-us-3.png"
        text="feitos para nunca passarem despercebidos"
      />
      <DoubleSection2
        img="/images/about-us-4.png"
        text="afinal, a Magdá é para quem não tem medo de ser único"
      />

      <hr className="text-white" />

      <p className="text-red-800 font-bold text-[30px] text-center">
        Porque do comum já existe demais
      </p>

      <Image
        src="/images/about-us-final.png"
        alt="Mulher usando brincos grandes e coloridos"
        width={300}
        height={0}
        className="mx-auto rounded-4xl"
        priority
      />

      <p className="text-red-800 font-bold text-[26px] text-center">
        Clique aqui e inicie este processo!
      </p>
    </section>
  );
}

function Carousel() {
  // Keep an order of indices so we can rotate without changing the source array
  const [order, setOrder] = useState<number[]>(() =>
    carouselImages.map((_, i) => i)
  );

  // Refs for FLIP animation
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const isAnimatingRef = useRef(false);

  const measurePositions = (list: number[]) => {
    const map = new Map<number, DOMRect>();
    list.forEach((idx) => {
      const el = itemRefs.current[idx];
      if (el) map.set(idx, el.getBoundingClientRect());
    });
    return map;
  };

  const flipTo = (newOrder: number[]) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // 1) First: measure current positions
    const first = measurePositions(order);

    // 2) Apply state change (Last will be after render)
    setOrder(newOrder);

    // 3) Wait a frame, then measure Last and set Invert transforms
    requestAnimationFrame(() => {
      const last = measurePositions(newOrder);

      newOrder.forEach((idx) => {
        const el = itemRefs.current[idx];
        if (!el) return;
        const f = first.get(idx);
        const l = last.get(idx);
        if (!f || !l) return;
        const dx = f.left - l.left;
        const dy = f.top - l.top;

        // Invert
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        el.style.willChange = "transform";
      });

      // 4) Next frame: play the transition by removing the transform
      requestAnimationFrame(() => {
        newOrder.forEach((idx) => {
          const el = itemRefs.current[idx];
          if (!el) return;
          el.style.transition = "transform 350ms ease";
          el.style.transform = "";
        });

        const onDone = () => {
          newOrder.forEach((idx) => {
            const el = itemRefs.current[idx];
            if (!el) return;
            el.style.transition = "";
            el.style.willChange = "auto";
          });
          isAnimatingRef.current = false;
        };

        // Fallback timeout in case transitionend doesn't fire
        const timeout = setTimeout(onDone, 400);

        // Clean up on the first transition end
        const firstEl = itemRefs.current[newOrder[0]];
        if (firstEl) {
          const handler = () => {
            clearTimeout(timeout);
            firstEl.removeEventListener("transitionend", handler);
            onDone();
          };
          firstEl.addEventListener("transitionend", handler);
        }
      });
    });
  };

  // Rotate right: last goes to first (previous)
  const prev = () => {
    if (order.length === 0 || isAnimatingRef.current) return;
    const last = order[order.length - 1];
    const newOrder = [last, ...order.slice(0, -1)];
    flipTo(newOrder);
  };

  // Rotate left: first goes to last (next)
  const next = () => {
    if (order.length === 0 || isAnimatingRef.current) return;
    const [first, ...rest] = order;
    const newOrder = [...rest, first];
    flipTo(newOrder);
  };

  return (
    <div className="flex flex-col items-center gap-4 my-5">
      <div className="flex items-center justify-between gap-4 w-full">
        <button
          onClick={prev}
          className="bg-red-800 text-white px-3 py-1 rounded-full shadow"
          aria-label="Anterior"
        >
          &#8592;
        </button>

        <div
          ref={containerRef}
          className="flex gap-4 w-8/10 overflow-hidden"
        >
          {order.map((idx) => {
            const src = carouselImages[idx];
            return (
              <div
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className="flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Magda Brincos ${idx + 1}`}
                  width={200}
                  height={0}
                  className="rounded-lg min-w-50"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="bg-red-800 text-white px-3 py-1 rounded-full shadow"
          aria-label="Próximo"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

function DoubleSection({ img, text }: { img: string; text: string }) {
  return (
    <div className="flex gap-5 md:gap-10 items-center justify-center h-fit">
      <img src={img} alt="" className="w-1/2 max-w-[200px] rounded-4xl" />
      <div className="p-5 text-sm text-center bg-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center shadow-md shadow-black/50">
        <p className="text-primary-100 text-shadow-black/50 text-shadow-sm text-[24px]">
          {text}
        </p>
      </div>
    </div>
  );
}

function DoubleSection2({ img, text }: { img: string; text: string }) {
  return (
    <div className="flex gap-5 md:gap-10 items-center justify-center h-fit">
      <div className="p-5 text-sm text-center bg-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center shadow-md shadow-black/50">
        <p className="text-primary-100 text-shadow-black/50 text-shadow-sm text-[24px]">
          {text}
        </p>
      </div>
      <img src={img} alt="" className="w-1/2 max-w-[200px] rounded-4xl" />
    </div>
  );
}
