import React from 'react';
import Headroom from 'react-headroom'
import TopAppBar from '../components/TopAppBar';
import TopicList from '../components/TopicList';
import { TOPICS_URL } from '../utils/constants';

export const TopicContext = React.createContext();

class TopicListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      isLoading: false,
    };
  }

  // TODO: Drag Down to reload
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(TOPICS_URL);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ topics: json.topics, isLoading: false });
    } catch (error) {
      console.log(error);
    }

    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  async loadTopics() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(`${TOPICS_URL}&offset=${this.state.topics.length}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState(state => ({
        topics: [...state.topics, ...json.topics],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.state.topics.length &&
      !this.state.isLoading
    ) {
      this.loadTopics();
    }
  }

  render() {
    return (
      <TopicContext.Provider
        value={this.state}
      >
        <Headroom style={{position: 'fixed'}}>
          <TopAppBar />
        </Headroom>
        <TopicList />
      </TopicContext.Provider>
    );
  }
}

export default TopicListContainer;
