"use client";

import { useAtomValue } from "jotai";
import { itemAtom } from "@/atoms/itemAtom";

import { showAlert } from "@/utils/sweetAlerts";

import { getColorName } from "@/utils/getColorName";

export default function CheckoutBar() {
  const item = useAtomValue(itemAtom);

  const handleCartClick = () => {
    if (!item) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    try {
      cart.push({
        nome: item.nome,
        cor: item.cor,
        valor: item.valor,
        img: item.img,
        quantidade: item.quantidade,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      showAlert("success", "Item adicionado ao carrinho");
    } catch (error) {
      showAlert("error", "Erro ao adicionar item ao carrinho");
    }
  };

  const handleBuyClick = () => {
    if (!item) return;
    const phone = "5511977588088";
    const quantidade = 1;
    const message =
      `Olá, gostaria de comprar o item:%0A%0A` +
      `1. ${item.nome}%0A` +
      `Cor: ${getColorName(item.cor ?? "")}%0A` +
      `Quantidade: ${quantidade}%0A` +
      `Valor unitário: R$ ${item.valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}%0A`;
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <nav className="bg-[#F79D5C] p-2 sticky bottom-0 z-10">
      <ul className="flex justify-around">
        <li className="w-1/3">
          <button
            onClick={handleCartClick}
            className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-[#EDEDF4] text-primary-100 cursor-pointer hover:scale-105 transition-all"
          >
            Carrinho
          </button>
        </li>
        <li className="w-1/3">
          <button
            onClick={handleBuyClick}
            className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-secondary-100 text-white cursor-pointer hover:scale-105 transition-all"
          >
            Comprar
          </button>
        </li>
      </ul>
    </nav>
  );
}

interface CartItem {
  nome: string;
  cor: string;
  valor: number;
  img?: string;
  quantidade: number;
}

export const CheckoutCart = () => {
  const handleBuyClick = () => {
    const phone = "5511977588088"; // número que vai receber o pedido
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length === 0) {
      alert("O carrinho está vazio.");
      return;
    }

    // monta a lista dos itens
    const itemsMessage = cart
      .map(
        (item: CartItem, i: number) =>
          `${i + 1}. ${item.nome}%0A` +
          `Cor: ${getColorName(item.cor)}%0A` +
          `Quantidade: ${item.quantidade}%0A` +
          `Valor unitário: R$ ${item.valor.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}%0A` +
          `Subtotal: R$ ${(item.valor * item.quantidade).toLocaleString(
            "pt-BR",
            { minimumFractionDigits: 2 }
          )}`
      )
      .join("%0A%0A");

    const total = cart.reduce(
      (acc: number, item: CartItem) => acc + item.valor * item.quantidade,
      0
    );

    const message = `Olá, gostaria de finalizar a compra com os seguintes itens:%0A%0A${itemsMessage}%0A%0AValor Total: R$ ${total.toLocaleString(
      "pt-BR",
      { minimumFractionDigits: 2 }
    )}`;

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <nav className="bg-[#F79D5C] p-2 sticky bottom-0 z-10">
      <ul className="flex justify-around">
        <li className="w-1/3">
          <button
            onClick={handleBuyClick}
            className="text-xl font-bold shadow-md shadow-[#00000040] rounded-md p-2 w-full bg-secondary-100 text-white cursor-pointer hover:scale-105 transition-all"
          >
            Comprar
          </button>
        </li>
      </ul>
    </nav>
  );
};
