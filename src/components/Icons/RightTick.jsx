import React from "react";

const RightTick = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
    {...rest}
  >
    <path
      fill="#45D67F"
      fillRule="evenodd"
      d="M6.642 12.52a1.093 1.093 0 0 1-1.547 0L2.32 9.748a1.095 1.095 0 0 1 1.547-1.548l2.002 2 5.87-5.87a1.093 1.093 0 1 1 1.547 1.548l-6.644 6.644z"
    />
  </svg>
);

export default RightTick;
