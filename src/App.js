import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import TopicListContainer from "./containers/TopicListContainer";
import TopicContainer from "./containers/TopicContainer";
import MainNavigation from "./components/MobileBtmNav";
import LoginForm from "./components/LoginForm";
import "./App.css";

// TODO: remove these 2 temp components
const NodeList = () => <div>This is NodeList component</div>;

const Node = () => <div>This is Node component</div>;

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
// TODO: add PrivateRoute and redirect when hit private route
// TODO: move routes to a sepreate file
class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Switch>
            <Route exact path="/" component={TopicListContainer} />
            <Route exact path="/topics" component={TopicListContainer} />
            <Route path="/topics/create" component={LoginForm} />
            <Route path="/topics/:topicId" component={TopicContainer} />
            <Route exact path="/nodes" component={NodeList} />
            <Route path="/nodes/:nodeId" component={Node} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={LoginForm} />
            <Route path="/notifications" component={LoginForm} />
            <Route path="/account" component={LoginForm} />
          </Switch>

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
