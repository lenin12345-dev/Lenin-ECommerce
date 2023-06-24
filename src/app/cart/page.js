"use client";

import { useCartConetext } from "../conetext/CartContext";
import CartTable from "../component/CartTable";
import Container from "@mui/material/Container";

const Cart = () => {
  const { cart = [] } = useCartConetext();
  return (
    <Container sx={{ marginTop: 20 }} maxWidth="lg">
      <CartTable cart={cart} />
    </Container>
  );
};
export default Cart;
