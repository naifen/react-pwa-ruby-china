import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ShareIcon from "@material-ui/icons/Share";

const styles = theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.grey[200]
  }
});

// TODO: real faviorit count
class TopicNavigation extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation showLabels className={classes.root}>
        <BottomNavigationAction
          value="back"
          onClick={() => window.history.back()}
          icon={<ArrowBackIcon />}
        />
        <BottomNavigationAction
          label="20"
          value="add-favorite"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction
          label="Watch"
          value="add-notification"
          icon={<NotificationsActiveIcon />}
        />
        <BottomNavigationAction
          label="Bookmark"
          value="add-bookmark"
          icon={<BookmarkBorderIcon />}
        />
        <BottomNavigationAction
          label="Share"
          value="share"
          icon={<ShareIcon />}
        />
      </BottomNavigation>
    );
  }
}

TopicNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicNavigation);
