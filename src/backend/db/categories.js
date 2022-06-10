import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Stock Market",
  },
  {
    _id: uuid(),
    categoryName: "Mutual Funds",
  },
  {
    _id: uuid(),
    categoryName: "Crypto",
  },
  {
    _id: uuid(),
    categoryName: "NFT",
  },
  {
    _id: uuid(),
    categoryName: "Finance",
  },
];
