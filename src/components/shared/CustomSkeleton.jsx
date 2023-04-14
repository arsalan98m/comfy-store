// custom skeleton classes are implemented on index.css

const CustomSkeleton = ({ styles, isText = false }) => {
  return (
    <div
      className={`skeleton ${isText && "skeleton-text"} `}
      style={styles}
    ></div>
  );
};

export default CustomSkeleton;
