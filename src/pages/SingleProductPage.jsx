// libraries/packages
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

// context
import { useProductsContext } from "../context/products_context";

// utilities
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";

// components
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  CustomSkeleton,
} from "../components";

const SingleProductPage = () => {
  const { productId } = useParams();

  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${productId}`);
  }, [productId]);

  useEffect(() => {
    // if error then navigate to home page after 3 seconds
    if (error) {
      setTimeout(() => {
        navigate("/ ");
      }, 3000);
    }
  }, [error]);

  // if (loading) {
  //   return <Loading />;
  // }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        {/* Back Button */}
        {loading ? (
          <CustomSkeleton
            styles={{
              width: "148px",
              height: "33px",
              borderRadius: "var(--radius)",
            }}
          />
        ) : (
          <Link to='/products' className='btn'>
            back to products
          </Link>
        )}

        <div className='product-center'>
          {/* Product Images */}
          <ProductImages images={images} loading={loading} />

          <section className='content'>
            {loading ? (
              <>
                {/* title */}
                <CustomSkeleton
                  styles={{
                    width: "300px",
                    height: "40px",
                    marginBottom: "0.75rem",
                  }}
                  isText={true}
                />

                {/* stars */}
                <CustomSkeleton
                  styles={{
                    width: "150px",
                    height: "16px",
                    marginBottom: "0.5rem",
                  }}
                  isText={true}
                />

                {/* price */}
                <CustomSkeleton
                  styles={{
                    width: "150px",
                    height: "25px",
                    marginBottom: "0.75rem",
                  }}
                  className='price'
                  isText={true}
                />

                {/* desc */}
                {Array.from({ length: 10 }, (_, index) => {
                  return (
                    <CustomSkeleton
                      styles={{
                        maxWidth: "45em",
                        width: "100%",
                        marginBottom: "0.75rem",
                        lineHeight: "2",
                      }}
                      isText={true}
                    />
                  );
                })}

                {/* info */}
                {Array.from({ length: 3 }, (_, index) => {
                  return (
                    <div
                      className='info'
                      style={{ marginTop: index == 0 ? "1.25rem" : "0.75rem" }}
                    >
                      <CustomSkeleton
                        styles={{
                          width: "100px",
                          height: "25px",
                        }}
                        className='price'
                        isText={true}
                      />
                      <CustomSkeleton
                        styles={{
                          width: "100px",
                          height: "25px",
                        }}
                        className='price'
                        isText={true}
                      />
                    </div>
                  );
                })}

                {/* horizontal line */}
                <CustomSkeleton
                  styles={{
                    width: "100%",
                    marginTop: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                  isText={true}
                />

                {/* color and item count */}
                {Array.from({ length: 2 }, (_, index) => {
                  return (
                    <div
                      className='info'
                      style={{ marginTop: index == 0 ? "1.75rem" : "0.75rem" }}
                    >
                      <CustomSkeleton
                        styles={{
                          width: "100px",
                          height: "25px",
                        }}
                        className='price'
                        isText={true}
                      />
                      <CustomSkeleton
                        styles={{
                          width: "100px",
                          height: "25px",
                        }}
                        className='price'
                        isText={true}
                      />
                    </div>
                  );
                })}

                {/* add to cart button */}
                <CustomSkeleton
                  styles={{
                    width: "140px",
                    height: "33px",
                    marginTop: "1rem",
                    borderRadius: "var(--radius)",
                  }}
                />
              </>
            ) : (
              <>
                <h2>{name}</h2>
                <Stars stars={stars} reviews={reviews} />
                <h5 className='price'>{formatPrice(price)}</h5>
                <p className='desc'>{description}</p>
                <p className='info'>
                  <span>Available: </span>
                  {stock > 0 ? "In stock" : "out of stock"}
                </p>
                <p className='info'>
                  <span>SKU: </span>
                  {sku}
                </p>
                <p className='info'>
                  <span>Brand: </span>
                  {company}
                </p>
                <hr />
                {stock > 0 && <AddToCart product={product} />}
              </>
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
