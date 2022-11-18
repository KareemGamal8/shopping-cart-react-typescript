import React, { useState } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { StoreData } from "../Data/StoreData";

type ShoppingCartProps = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const [show, setShow] = useState<boolean>(false);
  const { cartItems, closeCart } = useShoppingCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <>
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack gap={3}>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className='ms-auto fw-bold fs-5'>
                Total{" "}
                {FormatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = StoreData.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </div>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </>
  );
}

export default ShoppingCart;
