import React from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import data from "../db.json";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  console.log(data);
  return (
    <Flex>
      <AddProduct />
      <Grid>
        <Product data={data} />
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
