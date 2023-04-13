import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar style={{ backgroundColor: "#638984" }} position="sticky">
        <Toolbar>
          <NavLink to="/" sx={{ color: "white" }}>
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
