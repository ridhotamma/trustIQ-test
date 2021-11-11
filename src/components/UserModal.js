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
import React, { useState } from "react";

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

const UserModal = ({
  open,
  setOpen,
  openAlert,
  handleClose,
  setOpenAlert,
  inUpdate,
  user,
  updateUser,
}) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    name: user?.name,
    NIP: user?.NIP,
    no_tlp: user?.no_tlp,
    email: user?.email,
  });

  const handleSubmit = () => {
    setOpenAlert(true);
    console.log(userData);
    axios.post("http://localhost:5000/api/user/add", userData);
    setOpen(false);
  };

  const handleSubmitUpdate = (id) => {
    const newUser = {
      name: userData?.name,
      NIP: userData?.NIP,
      no_tlp: userData?.no_tlp,
      email: userData?.email,
    };
    setOpenAlert(true);
    updateUser(id, newUser);
    setOpen(false);

    console.log(id);
  };

  return (
    <React.Fragment>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <Typography variant="h5" className={classes.item}>
              {inUpdate ? "Update User" : "Tambah User Baru"}
            </Typography>
            <TextField
              required
              id="filled-required"
              label="Nama"
              variant="filled"
              defaultValue={user?.name}
              fullWidth
              className={classes.item}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value || user.name })
              }
            />
            <TextField
              required
              id="filled-required"
              label="Nomor NIP"
              variant="filled"
              fullWidth
              className={classes.item}
              defaultValue={user?.NIP}
              onChange={(e) =>
                setUserData({ ...userData, NIP: e.target.value || user.NIP })
              }
            />
            <TextField
              required
              id="filled-required"
              label="Nomor Telpon"
              variant="filled"
              defaultValue={user?.no_tlp}
              fullWidth
              className={classes.item}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  no_tlp: e.target.value || user.no_tlp,
                })
              }
            />
            <TextField
              required
              id="filled-required"
              label="Alamat Email"
              variant="filled"
              fullWidth
              defaultValue={user?.email}
              className={classes.item}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value || user.email,
                })
              }
            />
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={
                  inUpdate ? () => handleSubmitUpdate(user._id) : handleSubmit
                }
              >
                {inUpdate ? "Update" : "Create"}
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
          {inUpdate ? "User berhasil di Update!" : "User Berhasil dibuat"}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default UserModal;
