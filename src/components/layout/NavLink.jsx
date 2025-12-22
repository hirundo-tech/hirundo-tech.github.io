import React, { useState, useRef, useEffect, memo } from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavLink = ({ link }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive =
    location.pathname === link.href ||
    link?.subItems?.some((item) => item.href === location.pathname);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseClass = "font-medium text-xs transition-all duration-300";
  const activeClass = "text-[#2f80c9] font-bold";
  const inactiveClass = "text-[#1F1F1F] hover:text-[#2f80c9]";

  if (!link?.subItems) {
    return (
      <Link
        to={link.href}
        className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Box
      ref={dropdownRef}
      className={`relative cursor-pointer ${baseClass} ${
        isActive ? activeClass : inactiveClass
      }`}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => e.key === "Enter" && setOpen((prev) => !prev)}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        {link.label}
        <KeyboardArrowDownIcon
          sx={{
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Box>

      {open && (
        <Box
          className="absolute top-12 left-0 z-50 min-w-45 w-fit"
          sx={{
            display: "flex",
            gap: 5,
            background: "#D0DFE2",
            paddingX: 2,
            paddingY: 2,
            borderRadius: 8,
            boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          {link.subItems.map((subItem) => {
            const subActive = location.pathname === subItem.href;

            return (
              <Link
                key={subItem.href}
                to={subItem.href}
                className={`block px-2 min-w-27.5 py-0.5 ${
                  subActive ? activeClass : inactiveClass
                }`}
                onClick={() => setOpen(false)}
              >
                {subItem.label}
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default memo(NavLink);
