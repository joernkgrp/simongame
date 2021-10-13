import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pt: 2 }}
    >
      {"© "}
      <MuiLink color="inherit" href="https://mui.com/">
        Jörn,
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
