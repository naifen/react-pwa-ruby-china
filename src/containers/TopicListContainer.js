import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopAppBar from '../components/TopAppBar';
import TopicList from '../components/TopicList';
import { TOPICS_URL } from '../utils/constants';

export const TopicContext = React.createContext();

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class TopicListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      isLoading: true,
    };

    // preferred bind in constructor so that it's in the same scope with setState
    // explain: https://github.com/airbnb/javascript/tree/master/react#methods
    this.loadTopics = this.loadTopics.bind(this);
  }

  // TODO: filter url params, node_id, type, etc
  // TODO: Drag Down to reload
  async componentDidMount() {
    try {
      const response = await fetch(TOPICS_URL);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ topics: json.topics, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  async loadTopics() {
    try {
      const response = await fetch(`${TOPICS_URL}&offset=${this.state.topics.length}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState(state => ({
        topics: [...state.topics, ...json.topics]
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <TopicContext.Provider
        value={{ ...this.state, loadTopics: this.loadTopics }}
      >
        <TopAppBar />
        {this.state.isLoading ? (
          <CircularProgress className={classes.progress} color="secondary" />
        ) : (
          <TopicList />
        )}
      </TopicContext.Provider>
    );
  }
}

TopicListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicListContainer);
