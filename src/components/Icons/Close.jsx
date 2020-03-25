import React from "react";

export default ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      role='button'
      style={{ cursor: 'pointer'}}
      {...rest}
    >
      <path
        fill="#FFF"
        fillOpacity=".5"
        fillRule="evenodd"
        d="M13.563 13.563c-.58.58-1.522.58-2.102 0l-3.458-3.458-3.465 3.464a1.485 1.485 0 0 1-2.102 0 1.485 1.485 0 0 1 0-2.102L5.9 8.002 2.436 4.538a1.485 1.485 0 0 1 0-2.102 1.485 1.485 0 0 1 2.102 0L8.003 5.9l3.458-3.458a1.487 1.487 0 0 1 2.102 2.102l-3.458 3.46 3.458 3.457c.581.58.581 1.522 0 2.102"
      />
    </svg>
  );
};
