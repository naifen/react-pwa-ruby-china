import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ViewListIcon from "@material-ui/icons/ViewList";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon from "@material-ui/icons/Create";

const styles = theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.grey[200]
  }
});

// TODO: add routing here with react router
class MobileBtmNav extends React.Component {
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
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Topics"
          value="topics"
          icon={<ViewListIcon />}
        />
        <BottomNavigationAction
          label="Notifications"
          value="notifications"
          icon={<NotificationsIcon />}
        />
        <BottomNavigationAction
          label="New topic"
          value="create"
          icon={<CreateIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    );
  }
}

MobileBtmNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileBtmNav);
