import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Link } from "react-router-dom";
import { timeSince } from "../utils/dateTimeUtils";
import "../stylesheets/Markdown.css";

const styles = theme => ({
  root: {
    textAlign: "left !important",
    width: "100%",
    margin: "auto",
    maxWidth: 960,
    overflow: "auto"
  },
  secondary: {
    color: theme.palette.grey[600]
  },
  paper: {
    paddingBottom: 60,
    backgroundColor: theme.palette.background.default
  },
  paddingLR: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  icon: {
    marginRight: theme.spacing.unit,
    marginBottom: -3,
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  progress: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: -30,
    marginLeft: -30
  },
  avatar: {
    margin: 10
  }
});

const Topic = props => {
  const { classes, isLoading, topic } = props;

  const primaryText = (
    <Typography variant="title" gutterBottom>
      {topic.title}
    </Typography>
  );

  const secondaryText = (
    <Typography variant="body1" className={classes.secondary}>
      {`${topic.user && topic.user.name} • ${timeSince(
        topic.created_at
      )} ago • ${topic.hits} reads • `}
      <Link to={`/nodes/${topic.node_id}`}>{topic.node_name}</Link>
    </Typography>
  );

  return (
    <React.Fragment>
      {isLoading ? (
        <CircularProgress
          className={classes.progress}
          color="secondary"
          size={60}
        />
      ) : (
        <Paper
          className={classNames(classes.root, classes.paper)}
          elevation={1}
        >
          <List className={classes.root}>
            <ListItem divider>
              <ListItemText primary={primaryText} secondary={secondaryText} />
              <Avatar
                alt={topic.user && topic.user.name}
                src={topic.user && topic.user.avatar_url}
                className={classes.avatar}
              />
            </ListItem>
          </List>

          <div className={classes.paddingLR}>
            {topic.grade === "excellent" && (
              <Typography variant="body2">
                <ThumbUpIcon className={classes.icon} />
                This topic is marked as Excellent!
              </Typography>
            )}
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: topic.body_html }}
            />
          </div>
          <Button variant="contained" onClick={() => window.history.back()}>
            Back to Topics
          </Button>
          <p>heart add-to-noti bookmk share</p>
        </Paper>
      )}
    </React.Fragment>
  );
};

// TODO: add replies

Topic.propTypes = {
  classes: PropTypes.object.isRequired,
  topic: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Topic);
