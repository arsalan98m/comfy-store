// libraries/packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// context
import { useProductsContext } from "../../context/products_context";

// components
import {
  Loading,
  Error,
  Product,
  ProductShimmer,
  CustomSkeleton,
} from "../../components";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>

      <div className='section-center featured'>
        {loading &&
          Array.from({ length: 3 }, (_, index) => (
            <ProductShimmer key={index} />
          ))}

        {!loading &&
          featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
      </div>

      {!loading ? (
        <Link to='products' className='btn'>
          all products
        </Link>
      ) : (
        <CustomSkeleton
          styles={{
            width: "148px",
            height: "33px",
            borderRadius: "var(--radius)",
            margin: "0 auto",
          }}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
