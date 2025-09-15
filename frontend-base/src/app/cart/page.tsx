"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getColorName } from "../../utils/getColorName";

type CartItem = {
  nome: string;
  img: string;
  valor: number;
  cor: string;
  quantidade: number;
};

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const navigate = () => {
    router.push("/magda/store");
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        setCartItems(JSON.parse(cartData));
      } catch (err) {
        console.error("Erro ao ler o carrinho do localStorage:", err);
      }
    }
  }, []);

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantidade = newQty;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // 🔥 calcular o valor total
  const total = cartItems.reduce(
    (acc, item) => acc + item.valor * item.quantidade,
    0
  );

  return (
    <>
      <Icon
        onClick={navigate}
        icon="mingcute:arrow-left-line"
        className="rounded-full w-fit text-4xl fixed top-3 left-3 bg-primary-100 p-1 text-white cursor-pointer"
      />

      <section className="p-4 grid gap-4">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 flex gap-4 items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={item?.img}
                    alt={item?.nome}
                    width={120}
                    height={120}
                    className="rounded-lg h-30 w-20"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold">{item?.nome}</h2>
                    <p>Cor: {getColorName(item?.cor)}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(index, item.quantidade - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <p>{item?.quantidade}</p>
                      <button
                        onClick={() =>
                          updateQuantity(index, item.quantidade + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-primary-500 font-semibold">
                      R${" "}
                      {item?.valor?.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>

                <Icon
                  onClick={() => removeItem(index)}
                  icon="mdi:trash-outline"
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-700"
                />
              </div>
            ))}

            {/* 🔥 valor total */}
            <div className="text-right mt-4 font-bold text-lg">
              Total: R${" "}
              {total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Carrinho vazio</p>
        )}
      </section>
    </>
  );
}
