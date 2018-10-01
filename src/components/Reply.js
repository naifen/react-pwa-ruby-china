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
  },
  yellowBG: {
    backgroundColor: "#fffce9"
  },
  deleted: {
    textDecoration: "line-through",
    margin: "auto",
    color: theme.palette.grey[400]
  }
});

const Reply = props => {
  const { classes, reply, index } = props;

  const primaryText = (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: reply.body_html }}
    />
  );

  const secondaryText = (
    <Typography gutterBottom variant="caption" className={classes.secondary}>
      <Grid container spacing={8}>
        <Grid item xs={7}>
          {`${reply.user.login} #${index + 1} • ${timeSince(
            reply.updated_at
          )} ago`}
        </Grid>
        <Grid item xs={5} className={classes.actions}>
          <ReplyIcon className={classes.icon} />
          <ThumbUpIcon className={classes.icon} />
          {reply.likes_count > 0 &&
            ` ${reply.likes_count} like${reply.likes_count > 1 ? `s` : ``}`}
        </Grid>
      </Grid>
    </Typography>
  );

  // TODO: show reply thread (reply to xxx) HOW? no api found
  // TODO: Avatar above reply body???
  return (
    <ListItem
      divider
      className={
        reply.likes_count >= 5 && !reply.deleted ? classes.yellowBG : ""
      }
    >
      {reply.deleted ? (
        <Typography
          variant="subheading"
          align="center"
          className={classes.deleted}
        >
          Reply #{index + 1} has been deleted
        </Typography>
      ) : (
        <React.Fragment>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              alt={reply.user.login}
              src={reply.user.avatar_url}
            />
          </ListItemAvatar>
          <ListItemText primary={primaryText} secondary={secondaryText} />
        </React.Fragment>
      )}
    </ListItem>
  );
};

Reply.propTypes = {
  classes: PropTypes.object.isRequired,
  reply: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default withStyles(styles)(Reply);
