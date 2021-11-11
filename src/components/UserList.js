import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { request } from "../utils";
import React, { useState, useEffect } from "react";
import UserSingle from "./UserSingle";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../Context";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    height: (props) => (props.isLoading ? "90vh" : "fit-content"),
  },
}));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(parseInt(1));
  const [isSearching, setIsSearching] = useState(false);
  const isLoading = users?.results?.length > 0 ? false : true;
  const classes = useStyles(isLoading);
  const { searchTerm, optionTerm } = useContext(Context);

  const selectedUsers = users?.results?.filter((user) => {
    return user?.NIP?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    request.getUsers(
      `http://localhost:5000/api/users?page=${page}&limit=5`,
      setUsers
    );
    if (searchTerm && optionTerm) {
      setIsSearching(true);
    } else if (!searchTerm && !optionTerm) {
      setIsSearching(false);
    }
    // request.getUsers(`http://localhost:5000/api/users`, setUsers);
  }, [users, isSearching]);

  const deleteUser = (id) => {
    axios.delete("http://localhost:5000/api/user/" + id);
    setUsers((prevState) => prevState.filter(prevState._id !== id));
  };

  const updateUser = (id, newUser) => {
    // console.log(id);
    axios.put("http://localhost:5000/api/user/" + id, {
      name: newUser.name,
      NIP: newUser.NIP,
      no_tlp: newUser.no_tlp,
      email: newUser.email,
    });
  };

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Typography variant="h6">
          Total User Registered: {users.total}
        </Typography>
        <Typography variant="body1">
          Total Page: {Math.ceil(users.total / 5)}
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : null}
        {selectedUsers?.map((user) => (
          <UserSingle
            key={user._id}
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        ))}

        {!isSearching && (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              marginTop: "40px",
              marginBottom: "30px",
            }}
          >
            {page > 1 && (
              <Button
                variant="outlined"
                onClick={() => setPage((prevPage) => prevPage + parseInt(-1))}
              >
                halaman sebelumnya
              </Button>
            )}

            {/* <Typography>halaman ke : {page}</Typography> */}

            {page === Math.ceil(users.total / 5) ? null : (
              <Button
                variant="outlined"
                onClick={() => setPage((prevPage) => prevPage + parseInt(1))}
              >
                halaman selanjutnya
              </Button>
            )}
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};

export default UserList;
