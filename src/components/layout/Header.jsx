import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";
import NavLink from "./NavLink";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Fade from "@mui/material/Fade";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const baseClass = "font-medium text-xs transition-all duration-300";
const activeClass = "text-[#2f80c9] font-bold";
const inactiveClass = "text-[#1F1F1F] hover:text-[#2f80c9]";

const items = [
  {
    label: "Services",
    subItems: [
      { label: "Outsourcing", path: "/outsourcing" },
      { label: "Custom AI", path: "/custom-ai" },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
];

export default function Header({ visible }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: { lg: 0, md: 8, xs: 0 },
        mx: "auto",
        width: { md: "95%", xs: "98%" },
        borderRadius: 10,
        // backgroundColor: { md: "transparent", xs: "#D0DFE2" },
        backgroundColor: "transparent",
        mt: 0,
        minHeight: {
          lg: 177.55,
          xs: 142.03,
        },
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => setShow(true)}
          className="lg:hidden absolute cursor-pointer top-13 bg-[#2F80C9] rounded-md p-1 w-8.5 h-8.5 right-4"
        >
          {/* <img
            src={IMAGES.menu} // replace with your logo path
            alt="HIRUNDO Logo"
            width={30}
            height={30}
            fetchPriority="high"
            loading="lazy"
            className="lg:hidden block"
          /> */}
          <div
            className="lg:hidden flex justify-center items-center"
            onClick={() => setShow(true)}
          >
            <MenuRoundedIcon
              sx={{
                fontSize: "30px",
                marginTop: "-2px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        {/* Left: Logo + Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            cursor: "pointer",
          }}
          className="lg:h-[177.55px] h-[142.03px] lg:w-62.5 w-auto"
          onClick={() => navigate("/")}
        >
          <Fade in={visible} timeout={300}>
            <img
              src={IMAGES.logotype}
              alt="HIRUNDO Logo"
              width={250}
              height={95}
              fetchPriority="high"
              loading="lazy"
              className="lg:block hidden"
            />
          </Fade>
          <Fade in={visible} timeout={700}>
            <img
              src={IMAGES.logotype}
              alt="HIRUNDO Logo"
              width={200}
              height={50}
              fetchPriority="high"
              loading="lazy"
              className="lg:hidden block"
            />
          </Fade>
        </Box>

        {/* Center: Navigation Links */}
        <Box
          sx={{
            gap: 10,
            background: "#D0DFE2",
            paddingX: 6,
            paddingY: 2,
            borderRadius: 8,
            boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
          }}
          className="lg:flex hidden  justify-between items-center"
        >
          {items.map((link, index) => (
            <NavLink key={index} link={link} />
          ))}
        </Box>

        <Button
          className="lg:block hidden w-35.5!"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </Toolbar>
      {show && (
        <Drawer
          anchor="left"
          open={show}
          onClose={() => setShow(false)}
          sx={{
            "& .MuiDrawer-paper": {
              minWidth: "180px",
              backgroundColor: "#D0DFE2",
            },
          }}
        >
          <MobileMenu show={show} />
        </Drawer>
      )}
    </AppBar>
  );
}

const MobileMenu = ({ show }) => {
  const location = useLocation();
  const [showSubItems, setShowSubItem] = useState(false);
  const [subItemIndex, setSubItemIndex] = useState(null);

  return (
    <div className="bg-[#d0dfe2] w-auto flex flex-col gap-y-3 py-3 px-5">
      <img
        src={IMAGES.logotype}
        alt="HIRUNDO Logo"
        width={100}
        height={30}
        fetchPriority="high"
        loading="lazy"
        className="lg:hidden block"
      />

      {items.map((item, index) => {
        const isActive =
          location.pathname === item.path ||
          item?.subItems?.some((sitem) => sitem.path === location.pathname);
        if (!item?.subItems) {
          return (
            <Link
              key={index}
              to={item.path}
              className={`${baseClass} ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              {item.label}
            </Link>
          );
        }
        return (
          <Box
            key={index}
            className={`relative cursor-pointer ${baseClass} ${
              isActive ? activeClass : inactiveClass
            }`}
            role="button"
            aria-expanded={showSubItems && subItemIndex === index}
            tabIndex={0}
            onClick={() => {
              setShowSubItem((prev) => !prev);
              setSubItemIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                {
                  setShowSubItem((prev) => !prev);
                  setSubItemIndex(index);
                }
              }
            }}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              {item.label}
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: 20,
                  transition: "transform 0.3s",
                  transform:
                    showSubItems && subItemIndex === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              />
            </Box>

            {showSubItems && subItemIndex === index && (
              <Box
                className="w-fit"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  paddingX: 2,
                  paddingY: 1,
                }}
              >
                {item.subItems.map((subItem) => {
                  const subActive = location.pathname === subItem.path;

                  return (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className={`block  py-0.5 ${
                        subActive ? activeClass : inactiveClass
                      }`}
                      onClick={() => {
                        setShowSubItem(false);
                        setSubItemIndex(null);
                      }}
                    >
                      {subItem.label}
                    </Link>
                  );
                })}
              </Box>
            )}
          </Box>
        );
      })}
    </div>
  );
};
