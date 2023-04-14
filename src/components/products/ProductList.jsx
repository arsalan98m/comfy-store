// libraries/packages
import React from "react";

// context
import { useFilterContext } from "../../context/filter_context";

// components
import { GridView, ListView } from "./";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (!products.length) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (grid_view == false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
