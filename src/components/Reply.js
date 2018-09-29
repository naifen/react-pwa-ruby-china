import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ReplyIcon from "@material-ui/icons/Reply";
import Grid from "@material-ui/core/Grid";
import { timeSince } from "../utils/dateTimeUtils";

const styles = theme => ({
  avatar: {
    margin: 10,
    width: 30,
    height: 30
  },
  secondary: {
    fontSize: 13
  },
  actions: {
    textAlign: "right"
  },
  icon: {
    marginLeft: theme.spacing.unit,
    marginBottom: -3,
    fontSize: 16
  }
});

const Reply = props => {
  const { classes, reply } = props;

  const primaryText = (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: reply.body_html }}
    />
  );

  // TODO: real #x and clickable
  const secondaryText = (
    <Typography gutterBottom variant="caption" className={classes.secondary}>
      <Grid container spacing={8}>
        <Grid item xs={9}>
          {`#1 • ${reply.user.name} • ${timeSince(reply.updated_at)} ago`}
        </Grid>
        <Grid item xs={3} className={classes.actions}>
          <ThumbUpIcon className={classes.icon} />
          <ReplyIcon className={classes.icon} />
        </Grid>
      </Grid>
    </Typography>
  );

  // TODO: show reply thread (reply to)
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          alt={reply.user.name}
          src={reply.user.avatar_url}
        />
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

Reply.propTypes = {
  classes: PropTypes.object.isRequired,
  reply: PropTypes.object.isRequired
};

export default withStyles(styles)(Reply);
