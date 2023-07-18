// @refresh reset
// @useClient
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useProductConetext } from "../../conetext/productConetext";
import PageHeader from "../../component/PageHeader";
import Container from "@mui/material/Container";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import ProductDetails from "../../component/ProductDetails";
import ImageContainer from "../../component/ImageContainer";
import PageLoader from "../../component/PageLoader";

const API = "https://api.pujakaitem.com/api/products";

export default function SingleProduct() {
  const params = useParams();
  const { id } = params;
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductConetext();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading && !Object.keys(singleProduct).length) {
    return <PageLoader />;
  }


  return (
    <>
      <PageHeader title={singleProduct?.name} />
      <Container sx={{ marginBottom: 12 }} maxWidth="xl">
        <Box display="flex" justifyContent="space-between" mt={10}>
          <ImageContainer singleProduct={singleProduct} />
          <ProductDetails singleProduct={singleProduct} />
        </Box>
      </Container>
    </>
  );
}
