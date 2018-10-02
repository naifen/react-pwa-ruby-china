import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

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
    <Typography variant="body1" className={props.classes.marginbtm}>
      Please sign in to continue
    </Typography>
    <TextField
      label="Email"
      fullWidth
      type="email"
      name="email"
      autoComplete="email"
      margin="dense"
      variant="outlined"
    />
    <TextField
      label="Password"
      fullWidth
      type="password"
      name="password"
      autoComplete="password"
      margin="dense"
      variant="outlined"
    />
    <FormGroup row>
      <FormControlLabel
        className={props.classes.marginbtm}
        control={<Checkbox checked={false} value="shareEmail" />}
        label="Remember me for 60 days"
      />
    </FormGroup>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" size="large" fullWidth>
          Sign in
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subheading" align="left">
          Login in with other services
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" size="large" fullWidth>
          Login with Github
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          component={Link}
          to={(props.location.state && props.location.state.from) || "/"}
          variant="contained"
          fullWidth
        >
          go back
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign Up
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
// access from routes https://reacttraining.com/react-router/web/api/Redirect/to-object

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
