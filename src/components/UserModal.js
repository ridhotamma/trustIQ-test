import {
  Container,
  Modal,
  Snackbar,
  TextField,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const UserModal = ({ open, setOpen, openAlert, handleClose, setOpenAlert }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({});

  const handleSubmit = () => {
    setOpenAlert(true);
    console.log(userData);
    axios.post("http://localhost:5000/api/user/add", userData);
    setOpen(false);
  };

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <Typography variant="h5" className={classes.item}>
              Tambah User Baru
            </Typography>
            <TextField
              required
              id="filled-required"
              label="Nama"
              variant="filled"
              fullWidth
              className={classes.item}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <TextField
              required
              id="filled-required"
              label="Nomor NIP"
              variant="filled"
              fullWidth
              className={classes.item}
              onChange={(e) =>
                setUserData({ ...userData, NIP: e.target.value })
              }
            />
            <TextField
              required
              id="filled-required"
              label="Nomor Telpon"
              variant="filled"
              fullWidth
              className={classes.item}
              onChange={(e) =>
                setUserData({ ...userData, no_tlp: e.target.value })
              }
            />
            <TextField
              required
              id="filled-required"
              label="Alamat Email"
              variant="filled"
              fullWidth
              className={classes.item}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={handleSubmit}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default UserModal;
