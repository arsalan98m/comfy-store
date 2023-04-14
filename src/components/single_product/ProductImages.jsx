// libraries/packages
import React, { useState } from "react";
import styled from "styled-components";
import { CustomSkeleton } from "../";

const ProductImages = ({ images = [{ url: "" }], loading }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      {loading ? (
        <CustomSkeleton
          styles={{
            height: "600px",
            width: "100%",
            borderRadius: "var(--radius)",
          }}
        />
      ) : (
        <img src={main.url} alt='main image' className='main' />
      )}

      <div className='gallery'>
        {loading
          ? Array.from({ length: 5 }, (_, index) => (
              <CustomSkeleton
                styles={{
                  height: "100px",

                  borderRadius: "var(--radius)",
                }}
              />
            ))
          : images.map((image, index) => {
              const { url, filename } = image;

              return (
                <img
                  src={url}
                  key={index}
                  alt={filename}
                  onClick={() => setMain(images[index])}
                  className={`${image.url == main.url ? "active" : null}`}
                />
              );
            })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
