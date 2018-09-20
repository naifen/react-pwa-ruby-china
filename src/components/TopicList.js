import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { TopicContext } from '../containers/TopicListContainer';
import Topic from './Topic';

const styles = theme => ({
  root: {
    width: '100%',
    overflow: 'auto',
    paddingBottom: 60,
    backgroundColor: theme.palette.background.default,
  },
});

// TODO: hide TopAppBar while scroll down, show while scroll up
// TODO: subsitiue Load More button with infinite scroll
const TopicList = (props) => (
  <TopicContext.Consumer>
    {({ topics, loadTopics }) => (
      <Paper className={props.classes.root} elevation={1}>
        <List>
          {topics.map(topic => (
            <Topic topic={topic} key={topic.id} />
          ))}
        </List>

        <Button
          variant="contained"
          color="primary"
          onClick={loadTopics}
        >
          Load more
        </Button>
      </Paper>
    )}
  </TopicContext.Consumer>
);

TopicList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);
