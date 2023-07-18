// @refresh reset
// @useClient
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useProductConetext } from "../conetext/productConetext";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Product from "./product";
import Skeleton from "@mui/material/Skeleton";

export default function FeatureProduct() {
  const { isLoading, featureProducts } = useProductConetext();

  return (
    <Container maxWidth="lg">
      <Box mt={10} mb={4}>
        <Typography color="primary">Check now</Typography>
        <Typography sx={{ marginBottom: 6 }} variant="h4" fontWeight="bold">
          Our Feature Services
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {featureProducts &&
            featureProducts.length &&
            !isLoading ?
            featureProducts.map((each) => {
              return <Product key={each.id} {...each} />;
            }):null}
          {isLoading &&
            Array.from(new Array(3)).map((each, index) => {
              return (
                <Skeleton variant="rectangular" width={300} height={218} />
              );
            })}
        </Box>
      </Box>
    </Container>
  );
}
