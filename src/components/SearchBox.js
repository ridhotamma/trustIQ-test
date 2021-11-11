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
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(2),
  },

  input: {
    width: "100%",
  },
  button: {
    width: "20%",
    marginLeft: theme.spacing(2),
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  const [searchBy, setSearchBy] = React.useState("");

  const selectOptions = {
    name: "name",
    nip: "nip",
    noTelp: "noTelp",
    email: "email",
  };

  const { name, nip, noTelp, email } = selectOptions;

  const handleSelect = (event) => {
    setSearchBy(event.target.value);
  };
  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth="lg">
        <TextField
          id="filled-required"
          label="Search..."
          variant="outlined"
          className={classes.input}
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-label">searchBy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchBy}
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
        <Button variant="outlined" className={classes.button}>
          Search
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default SearchBox;
