import create from "zustand";

import { devtools, persist, combine } from "zustand/middleware";

import lettuce from "../assets/images/main.png";
import pear from "../assets/images/pear.png";
import straberry from "../assets/images/straberry.png";
import cherries from "../assets/images/Cherries.png";

import apple from "../assets/images/apple.png";
import React from "react";

const users = [
  { title: "Admin", isAdmin: true, hasAccess: true },
  { title: "Pouria", isAdmin: false, hasAccess: false },
  { title: "Amir", isAdmin: false, hasAccess: false },
];

const products = [
  {
    name: "Pear",
    price: 365,
    weight: 10,
    img: pear,
  },

  {
    name: "Strawberry",
    price: 10,
    weight: 30,
    img: straberry,
  },

  {
    name: "Cherry",
    price: 10,
    weight: 50,
    img: cherries,
  },

  {
    name: "Apple",
    price: 10,
    weight: 60,
    img: apple,
  },

  {
    name: "Lettuce",
    weight: 80,
    price: 10,
    img: lettuce,
  },
];
type productsType = Array<{
  name: string;
  price: number;
  weight: number;
  img?: string;
}>;
type productType = {
  name: string;
  price: number;
  weight: number;
  img?: string;
};
interface ProductsType {
  loggedInUser: Record<
    "title" | "isAdmin" | "hasAccess",
    string | boolean
  > | null;
  isLoggedIn: boolean;
  users: typeof users;
  productsBasket: productsType;
  products: productsType;
}
interface ProductsTypeActions {
  addProdcut: (product: productType) => void;
  setSortedprodcut: (products: productsType) => void;
  setLoggedInUser: (
    info: Record<"title" | "isAdmin" | "hasAccess", string | boolean>
  ) => void;
  setIsLoggin: (isLogin: boolean) => void;
  addProductToShop: (product: productType) => void;
  setPermissionUser: (newUsers: typeof users) => void;
}
const DEFAULT_VALUES = {
  loggedInUser: null,
  isLoggedIn: false,
  users: users,
  productsBasket: [],
  products: products,
};
export const useStore = create(
  combine<ProductsType, ProductsTypeActions>(DEFAULT_VALUES, (set, get) => ({
    setSortedprodcut: (products) => set(() => ({ products: [...products] })),
    addProdcut: (product) =>
      set((state) => ({
        productsBasket: [...state.productsBasket, product],
      })),

    setLoggedInUser: (info) => set({ loggedInUser: { ...info } }),
    setIsLoggin: (isLogin) => set({ isLoggedIn: isLogin }),
    addProductToShop: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    setPermissionUser: (users) => set({ users: [...users] }),
  }))
);
