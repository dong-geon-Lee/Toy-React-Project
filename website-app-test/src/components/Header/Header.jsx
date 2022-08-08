import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  Wrapper,
  Nav,
  Text,
  Image,
  LogoBox,
  Button,
} from "./Header.js";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Image src="assets/logo.png" alt="logo" />
        </Link>

        <Nav sidebar={sidebar}>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/pages">
            <Text>Pages</Text>
          </Link>
          <Link to="/blog">
            <Text>Blog</Text>
          </Link>
          <Link to="/portfolio">
            <Text>Portfolio</Text>
          </Link>
          <Link to="/shop">
            <Text>Shop</Text>
          </Link>
          <Link to="/contact">
            <Text>Contact</Text>
          </Link>
        </Nav>

        <LogoBox>
          <SearchOutlinedIcon className="HeaderIcon" />
          <WorkIcon className="HeaderIcon" />
          <GridViewTwoToneIcon className="HeaderIcon" />
        </LogoBox>

        <Button onClick={() => setSidebar((prev) => !prev)}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Header;
