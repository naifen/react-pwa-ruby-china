import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { timeSince } from "../utils/dateTimeUtils";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  caption: {
    marginRight: 5
  },
  icon: {
    marginLeft: theme.spacing.unit,
    marginBottom: -3,
    fontSize: 16,
    color: theme.palette.secondary.main
  }
});

const TopicListItem = props => {
  const { classes, topic } = props;

  const primaryText = (
    <Typography gutterBottom variant="subheading">
      {topic.title}
      {topic.grade === "excellent" && <ThumbUpIcon className={classes.icon} />}
    </Typography>
  );

  // ternay style https://github.com/airbnb/javascript#comparison--nested-ternaries
  const repliedByText = topic.replied_at
    ? `• last replied by ${topic.last_reply_user_login}
      ${timeSince(topic.replied_at)} ago`
    : "";
  const secondaryText = `${topic.user.login} • ${
    topic.node_name
  } ${repliedByText}`;

  return (
    <ListItem className={classes.root} divider={true}>
      <ListItemAvatar>
        <Avatar alt={topic.user.login} src={topic.user.avatar_url} />
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
      <ListItemSecondaryAction>
        <Typography
          className={classes.caption}
          gutterBottom
          variant="body1"
          align="right"
        >
          {topic.replies_count}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

TopicListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  topic: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicListItem);
