import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
  const [page, setPage] = useState(parseInt(1));
  const [isSearching, setIsSearching] = useState(false);
  const { searchTerm, optionTerm, users, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(isSearching);
    if (searchTerm && optionTerm) {
      setIsSearching(true);
    } else if (!searchTerm && !optionTerm) {
      setIsSearching(false);
    }

    const url = !isSearching
      ? `http://localhost:5000/api/users?page=${page}&limit=5`
      : `http://localhost:5000/api/users`;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch({ type: "GET_USERS_DATA", payload: json }));

    console.log(users);
  }, [searchTerm, optionTerm, page]);

  const selectedUsers = users?.results?.filter((user) => {
    let searchUsers = user?.name;
    if (optionTerm === "name") searchUsers = user?.name;
    if (optionTerm === "nip") searchUsers = user?.NIP;
    if (optionTerm === "noTelp") searchUsers = user?.no_tlp;
    if (optionTerm === "email") searchUsers = user?.email;

    return searchUsers?.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const isLoading = users?.results?.length > 0 ? false : true;
  const classes = useStyles(isLoading, isSearching);

  const deleteUser = (id) => {
    axios.delete("http://localhost:5000/api/user/" + id);
    window.location.reload();
  };

  const updateUser = (id, newUser) => {
    axios.put("http://localhost:5000/api/user/" + id, {
      name: newUser.name,
      NIP: newUser.NIP,
      no_tlp: newUser.no_tlp,
      email: newUser.email,
    });
    window.location.reload();
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
                onClick={() => {
                  setPage((prevPage) => prevPage + parseInt(1));
                }}
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
