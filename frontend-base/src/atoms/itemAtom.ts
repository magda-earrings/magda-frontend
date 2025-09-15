import { atom } from "jotai";

export type ItemState = {
  nome: string;
  cor: string;
  valor: number;
  img: string;
  quantidade: number;
} | null;

export const itemAtom = atom<ItemState>(null);
