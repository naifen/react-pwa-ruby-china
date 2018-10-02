import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "auto",
    maxWidth: 960,
    overflow: "auto",
    padding: 20,
    height: "100vh"
  },
  marginbtm: {
    marginBottom: theme.spacing.unit * 2
  }
});

const LoginForm = props => (
  <Paper elevation={1} className={props.classes.root}>
    <Typography variant="title" className={props.classes.marginbtm}>
      Welcome to Ruby China PWA
    </Typography>
    <TextField
      label="Username"
      fullWidth
      type="username"
      name="username"
      autoComplete="username"
      margin="dense"
      variant="outlined"
    />
    <TextField
      label="Name"
      fullWidth
      type="name"
      name="name"
      autoComplete="name"
      margin="dense"
      variant="outlined"
    />
    <TextField
      label="Email"
      fullWidth
      type="email"
      name="email"
      autoComplete="email"
      margin="dense"
      variant="outlined"
    />
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={false} value="shareEmail" />}
        label="Anyone can view my email"
      />
    </FormGroup>
    <TextField
      label="Password"
      fullWidth
      type="password"
      name="password"
      autoComplete="password"
      margin="dense"
      variant="outlined"
    />
    <TextField
      label="Password Confirmation"
      fullWidth
      type="password"
      name="password confirmation"
      autoComplete="password confirmation"
      margin="dense"
      variant="outlined"
    />
    <TextField
      label="Verification Code"
      className={props.classes.marginbtm}
      fullWidth
      type="verification"
      name="verification"
      autoComplete="verification"
      margin="dense"
      variant="outlined"
    />

    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" size="large" fullWidth>
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" fullWidth>
          go back
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign In
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          component={Link}
          to="/"
          size="small"
          variant="outlined"
          fullWidth
        >
          Home Page
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
