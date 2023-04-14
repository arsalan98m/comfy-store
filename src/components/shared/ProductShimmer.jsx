import styled from "styled-components";
import { CustomSkeleton } from "..";

const ProductShimmer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <CustomSkeleton
          styles={{
            width: "100%",
            height: "225px",
            borderRadius: `var(--radius)`,
          }}
        />

        <CustomSkeleton
          styles={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "red",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
          }}
        />
      </div>

      <footer>
        <CustomSkeleton isText={true} />
        <CustomSkeleton isText={true} />
      </footer>
    </Wrapper>
  );
};

export default ProductShimmer;

const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: var(--radius);
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
