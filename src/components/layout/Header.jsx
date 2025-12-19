import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";

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

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: { lg: 16, md: 12, xs: 2 },
        mx: "auto",
        width: "95%",
        borderRadius: 3,
        backgroundColor: "transparent",
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: { lg: "space-between", xs: "center" },
        }}
      >
        <div className="lg:hidden absolute top-5 bg-[#2F80C9] rounded-full p-2 right-2">
          <img
            src={IMAGES.menu} // replace with your logo path
            alt="HIRUNDO Logo"
            width={17}
            height={17}
            className="lg:hidden block"
          />
        </div>
        {/* Left: Logo + Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <p
            className="text-center text-[#1F1F1F] leading-4 lg:text-[26px] text-lg"
            style={{
              fontWeight: 800,
              leadingTrim: "none",
              letterSpacing: "30%",
              verticalAlign: "middle",
            }}
          >
            HIRUNDO
          </p>
          <img
            src={IMAGES.logo} // replace with your logo path
            alt="HIRUNDO Logo"
            width={95}
            height={95}
            className="lg:block hidden"
          />
          <img
            src={IMAGES.logo} // replace with your logo path
            alt="HIRUNDO Logo"
            width={75}
            height={75}
            className="lg:hidden block"
          />
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
          className="md:flex hidden"
        >
          {items.map((link, index) => (
            <NavLink key={index} link={link} />
          ))}
        </Box>

        <Button
          className="lg:block hidden"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}
