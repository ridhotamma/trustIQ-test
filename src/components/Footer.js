import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.box}>
        <Typography color="inherit">ridhotamma, TrustIQ minitest</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
