import {
  Card,
  CardContent,
  Container,
  Typography,
  Avatar,
  makeStyles,
  Paper,
  IconButton,
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";

import React, { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.spacing(2),
    },
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  cardContent: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  textWrapper: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
  },
}));

const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const request = async (url) => {
      const response = await axios.get(url);
      await setUsers(response.data);
    };

    request("http://localhost:5000/api/users");
  }, []);

  return (
    <React.Fragment>
      <Container className={classes.container}>
        {users?.results?.map((user) => (
          <Paper>
            <Card className={classes.card} variant="contained">
              <div>
                <CardContent className={classes.cardContent}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    className={classes.avatar}
                  />
                  <div className={classes.textWrapper}>
                    <Typography gutterBottom variant="h6">
                      {user.name}
                    </Typography>
                    <Typography gutterBottom>Nomor NIP : {user.NIP}</Typography>
                    <Typography gutterBottom>
                      Nomor Telepon : {user.no_tlp}
                    </Typography>
                    <Typography gutterBottom>
                      Alamat Email : {user.email}
                    </Typography>
                  </div>
                </CardContent>
              </div>
              <div>
                <IconButton color="inherit">
                  <Edit />
                </IconButton>
                <IconButton color="inherit">
                  <Delete />
                </IconButton>
              </div>
            </Card>
          </Paper>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default UserList;
