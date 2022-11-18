import { ReactNode } from "react";

export type StoreProps = {
  item: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  };
};
