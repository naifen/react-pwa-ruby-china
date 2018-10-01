import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { timeSince } from "../utils/dateTimeUtils";
import "../stylesheets/Markdown.css";
import ReplyList from "../components/ReplyList";

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
    marginBottom: 60,
    backgroundColor: theme.palette.background.default
  },
  tpbody: {
    marginBottom: theme.spacing.unit * 2,
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
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10,
    width: 45,
    height: 45
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 8,
    right: theme.spacing.unit
  }
});

const Topic = props => {
  const {
    classes,
    isLoading,
    topic,
    replies,
    isFetchingReplies,
    showScrollTop
  } = props;

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
              <ListItemAvatar>
                <Avatar
                  alt={topic.user && topic.user.name}
                  src={topic.user && topic.user.avatar_url}
                  className={classes.avatar}
                />
              </ListItemAvatar>
            </ListItem>
          </List>

          <div className={classes.tpbody}>
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

          <Divider />

          <Typography
            style={{ textAlign: "center", margin: 15 }}
            variant="title"
          >
            Please Login to reply
          </Typography>

          <Divider />

          <ReplyList replies={replies} isLoading={isFetchingReplies} />
          {showScrollTop && (
            <Button
              mini
              variant="fab"
              className={classes.fab}
              color="secondary"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <KeyboardArrowUpIcon />
            </Button>
          )}
        </Paper>
      )}
    </React.Fragment>
  );
};

// TODO: better reply textarea

Topic.propTypes = {
  classes: PropTypes.object.isRequired,
  topic: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  replies: PropTypes.array.isRequired,
  isFetchingReplies: PropTypes.bool.isRequired
};

export default withStyles(styles)(Topic);
