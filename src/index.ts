import type { BitBurner } from "BitBurner";

export const main = async (ns: BitBurner) => {
  ns.print(ns.args);
};
