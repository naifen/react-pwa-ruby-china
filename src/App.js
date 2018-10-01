import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import MainNavigation from "./components/MainNavigation";
import routes from "./config/routes";
import "./App.css";

const styles = theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  footer: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 15,
    paddingBottom: 15
  }
});

// TODO: do NOT re-fetch topics when switch between url
// (move fetch to App component or use ServiceWorker to cache)
class App extends Component {
  render() {
    const { classes } = this.props;
    const path = window.location.pathname;

    // TODO: fetch states, eg notifications, etc and show on MainNav
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          {routes}

          <div className={classes.sectionMobile}>
            {!(
              path.substring(0, 8) === "/topics/" &&
              /^\d+$/.test(path.substring(8))
            ) && <MainNavigation />}
          </div>

          <div className={classes.sectionDesktop}>
            <footer className={classes.footer}>
              <Typography variant="title" color="textPrimary" gutterBottom>
                ruby-china.org API + React.js + PWA made with &#9829; by github
                <a href="https://github.com/naifen">@naifen</a>
              </Typography>
            </footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
