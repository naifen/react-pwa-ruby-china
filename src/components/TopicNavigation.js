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
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.grey[200]
  }
});

class TopicNavigation extends React.Component {
  render() {
    const { classes, likesCount } = this.props;

    // TODO: use meta apis, eg meta.followed to determine icon border/filled
    // TODO: implement share menu similar to ios's behavior
    return (
      <BottomNavigation showLabels className={classes.root}>
        <BottomNavigationAction
          value="back"
          onClick={() => window.history.back()}
          icon={<ArrowBackIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/login"
          label={likesCount}
          value="add-favorite"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/login"
          label="Watch"
          value="add-notification"
          icon={<NotificationsActiveIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/login"
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
  classes: PropTypes.object.isRequired,
  likesCount: PropTypes.number.isRequired
};

export default withStyles(styles)(TopicNavigation);
