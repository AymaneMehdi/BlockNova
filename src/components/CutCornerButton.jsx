import React from "react";
import { twMerge } from "tailwind-merge";
// eslint-disable-next-line react/prop-types
export const CutCornerButton = ({ className, children }) => {
  return (
    <div>
      <button className={twMerge(
        "bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative",
        className
      )}>
        <div className="absolute inset-0 outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,_transparent_0,_transparent_10px,_black_10px,_black_100%)]" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 text-fuchsia-500"
        >
          <path
            d="M0 1H12.2667L23 11.7333V24"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span className="leading-6">{children}</span>
      </button>
    </div>
  );
};
