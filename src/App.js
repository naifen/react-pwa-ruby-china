import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import MainNavigation from "./components/MobileBtmNav";
import TopicListContainer from "./containers/TopicListContainer";
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

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <TopicListContainer />

          <div className={classes.sectionMobile}>
            <MainNavigation />
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
