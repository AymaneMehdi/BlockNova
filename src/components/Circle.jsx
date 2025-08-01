import React from "react";
import { twMerge } from "tailwind-merge";
// eslint-disable-next-line react/prop-types
export const Circle = ({ className = "", children }) => {
  return (
    <div className={twMerge(
      "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline-[6px] outline-fuchsia-500/10 -outline-offset-[6px]",
      className
    )}>
      {children}
    </div>
  );
};
