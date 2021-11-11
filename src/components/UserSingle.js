import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
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

const UserSingle = ({ user, deleteUser, updateUser }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
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
            <IconButton color="inherit" onClick={() => updateUser(user._id)}>
              <Edit />
            </IconButton>
            <IconButton color="inherit" onClick={() => deleteUser(user._id)}>
              <Delete />
            </IconButton>
          </div>
        </Card>
      </Paper>
    </React.Fragment>
  );
};

export default UserSingle;
