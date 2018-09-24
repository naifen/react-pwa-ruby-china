import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { TopicContext } from "../containers/TopicListContainer";
import TopicListItem from "./TopicListItem";
import { PULL_DOWN_RELEASE_HEIGHT } from "../utils/constants";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "auto",
    maxWidth: 960,
    overflow: "auto",
    paddingBottom: 60,
    backgroundColor: theme.palette.background.default
  },
  progress: {
    marginTop: theme.spacing.unit * 2
  }
});

// TODO: pull down not smooth on mobile Firefox and Safari
const TopicList = props => (
  <TopicContext.Consumer>
    {({ topics, isLoading, isPullingDown, pullDownHeight, isRefreshing }) => (
      <Paper className={props.classes.root} elevation={1}>
        {isPullingDown && (
          <div
            style={{
              height: pullDownHeight,
              WebkitTransition: "height 300ms cubic-bezier(0,0,0.2,1)",
              transition: "height 300ms cubic-bezier(0,0,0.2,1)"
            }}
          >
            <br />
            <Typography variant="subheading" gutterBottom>
              {pullDownHeight > PULL_DOWN_RELEASE_HEIGHT
                ? "Release to refresh"
                : "Pull down to refresh"}
            </Typography>
          </div>
        )}
        {isRefreshing && (
          <CircularProgress
            className={props.classes.progress}
            color="secondary"
            size={30}
          />
        )}
        <List>
          {topics.map(topic => (
            <TopicListItem topic={topic} key={topic.id} />
          ))}
        </List>
        {isLoading && (
          <CircularProgress
            className={props.classes.progress}
            color="secondary"
            size={30}
          />
        )}
      </Paper>
    )}
  </TopicContext.Consumer>
);

TopicList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicList);
