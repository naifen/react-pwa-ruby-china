import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ViewListIcon from "@material-ui/icons/ViewList";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.grey[200]
  }
});

class MainNavigation extends React.Component {
  state = {
    value: "topics"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Topics"
          value="topics"
          icon={<ViewListIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/notifications"
          label="Notifications"
          value="notifications"
          icon={<NotificationsNoneIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/compose"
          label="Compose"
          value="create"
          icon={<CreateIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/account"
          label="Account"
          value="account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    );
  }
}

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainNavigation);
