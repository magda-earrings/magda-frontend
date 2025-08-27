import { atom } from "jotai";

export interface ItemState {
  nome: string;
  cor: string | null;
}

export const itemAtom = atom<ItemState | null>(null);
