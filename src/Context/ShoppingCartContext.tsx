/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
type ShoppingCartProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemsQuantity: (id: number) => void;
  decreaseItemsQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItems[];
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item: CartItems) => item.id === id)?.quantity || 0;
  };
  const increaseItemsQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItemsQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number): void => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        increaseItemsQuantity,
        getItemQuantity,
        decreaseItemsQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
