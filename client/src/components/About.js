import React from "react";
import { Box, Typography, TableFooter } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h1">
          CRUD APPLICATION
        </Typography>
        <TableFooter sx={{ fontFamily: "cursive" }}>
          Made with ❤️ by Vedant Yetekar
        </TableFooter>
      </Box>
    </div>
  );
};

export default About;
