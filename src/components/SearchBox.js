import {
  TextField,
  Container,
  Button,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  Box,
  FormControl,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../Context";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(2),
  },

  input: {
    width: "100%",
  },
  button: {
    width: "10%",
    marginLeft: theme.spacing(1),
  },
}));

const SearchBox = () => {
  const { dispatch, searchTerm, optionTerm } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    console.log(searchTerm, optionTerm);
  }, [searchTerm, optionTerm]);

  const selectOptions = {
    name: "name",
    nip: "nip",
    noTelp: "noTelp",
    email: "email",
  };

  const { name, nip, noTelp, email } = selectOptions;

  const handleSelect = (event) => {
    dispatch({ type: "CHANGE_OPTION_FIELD", payload: event.target.value });
    console.log(optionTerm);
  };

  const resetForm = () => {
    dispatch({ type: "RESET_SEARCH_FIELD" });
    dispatch({ type: "RESET_OPTION_FIELD" });
  };
  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth="lg">
        <TextField
          id="filled-required"
          label="Search..."
          variant="outlined"
          className={classes.input}
          value={searchTerm}
          onChange={(e) =>
            dispatch({ type: "CHANGE_SEARCH_FIELD", payload: e.target.value })
          }
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-label">searchBy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={optionTerm}
              label="searchBy"
              onChange={handleSelect}
            >
              <MenuItem value={name}>Nama</MenuItem>
              <MenuItem value={nip}>NIP</MenuItem>
              <MenuItem value={noTelp}>No Telpon</MenuItem>
              <MenuItem value={email}>Email</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={resetForm}
        >
          Reset
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default SearchBox;
