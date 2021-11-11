import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Container,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import UserModal from "./UserModal";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    color: "white",
  },
  appBar: {},
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.logo}>
              TrustIQ Users
            </Typography>
            <Button
              endIcon={<AddIcon />}
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Tambah User
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <UserModal
        open={open}
        setOpen={setOpen}
        openAlert={openAlert}
        handleClose={handleClose}
        setOpenAlert={setOpenAlert}
      />
    </React.Fragment>
  );
};

export default Navbar;
