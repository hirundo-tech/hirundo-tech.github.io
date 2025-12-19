import React from "react";
import { darken } from "@mui/material";

const baseColor = "#2F80C9";
const bgHover = darken(baseColor, 0.4);
const borderHover = darken(baseColor, 0.4);

const variants = {
  outlined:
    "md:min-w-[140px] bg-transparent cursor-pointer disabled:cursor-not-allowed md:px-5 px-3 md:py-3 py-2 text-[13px] border border-[#2F80C9] rounded-[32px] outline-none text-[#2F80C9] font-semibold transition-colors",
  contained:
    "md:min-w-[140px] cursor-pointer disabled:cursor-not-allowed bg-[#2F80C9] md:px-5 px-3 md:py-3 py-2 text-[13px] border border-[#2F80C9] outline-none rounded-[32px] text-white font-semibold transition-colors",
};

const Button = ({
  children,
  variant = "contained",
  className = "",
  ...props
}) => {
  const variantClass = variants[variant] || variants.contained;

  const handleEnter = (e) => {
    if (variant === "contained") {
      e.currentTarget.style.backgroundColor = bgHover;
    } else {
      e.currentTarget.style.borderColor = borderHover;
      e.currentTarget.style.color = borderHover;
    }
  };

  const handleLeave = (e) => {
    if (variant === "contained") {
      e.currentTarget.style.backgroundColor = baseColor;
    } else {
      e.currentTarget.style.borderColor = baseColor;
      e.currentTarget.style.color = baseColor;
    }
  };

  return (
    <button
      className={variantClass + " " + className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
