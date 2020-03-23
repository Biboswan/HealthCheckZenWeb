import React from "react";

const Error = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
    {...rest}
  >
    <path
      fill="#E65055"
      fillRule="evenodd"
      d="M12.637 12.637a1.24 1.24 0 0 1-1.752 0L8.003 9.755l-2.888 2.887a1.237 1.237 0 0 1-1.752 0 1.237 1.237 0 0 1 0-1.752L6.25 8.002 3.363 5.115a1.237 1.237 0 0 1 0-1.752 1.237 1.237 0 0 1 1.752 0L8.003 6.25l2.882-2.882a1.24 1.24 0 0 1 1.752 1.752L9.755 8.003l2.882 2.882a1.237 1.237 0 0 1 0 1.752"
    />
  </svg>
);

export default Error;
