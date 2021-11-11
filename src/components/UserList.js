import {
  Backdrop,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { request } from "../utils";
import React, { useState, useEffect } from "react";
import UserSingle from "./UserSingle";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    height: (props) => (props.isLoading ? "90vh" : "fit-content"),
  },
}));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const isLoading = users?.results?.length > 0 ? false : true;
  const classes = useStyles(isLoading);

  useEffect(() => {
    request.getUsers(
      `http://localhost:5000/api/users?page=${page}&limit=5`,
      setUsers
    );
  }, [users]);

  const deleteUser = (id) => {
    axios.delete("http://localhost:5000/api/user/" + id);
  };

  const updateUser = (id, newUser) => {
    console.log(id);
    axios
      .put("http://localhost:5000/api/user/" + id, {
        name: newUser.name,
        NIP: newUser.NIP,
        no_tlp: newUser.no_tlp,
        email: newUser.email,
      })
      .then((res) => console.log(res));
  };
  return (
    <React.Fragment>
      <Container className={classes.container}>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : null}
        <Typography></Typography>
        {users?.results?.map((user) => (
          <UserSingle
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default UserList;
