import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TopicContext } from '../containers/TopicListContainer';
import TopicListItem from './TopicListItem';

const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    maxWidth: 960,
    overflow: 'auto',
    paddingBottom: 60,
    backgroundColor: theme.palette.background.default,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const TopicList = (props) => (
  <TopicContext.Consumer>
    {({ topics, isLoading }) => (
      <Paper className={props.classes.root} elevation={1}>
        <List>
          {topics.map(topic => (
            <TopicListItem topic={topic} key={topic.id} />
          ))}
        </List>
        {isLoading &&
          <CircularProgress
            className={props.classes.progress}
            color="secondary"
          />
        }
      </Paper>
    )}
  </TopicContext.Consumer>
); //TODO: make loading indicator float on top most

TopicList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);
