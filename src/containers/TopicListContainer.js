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
      isPullingDown: false,
      pullDownHeight: 0,
      isRefreshing: false,
    };
  }

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

    document.addEventListener('touchstart', e => {
      this.initY = e.touches[0].pageY;
    }, { passive: true });

    document.addEventListener('touchmove', e => {
      const y = e.touches[0].pageY;
      if (document.scrollingElement.scrollTop === 0 && y > this.initY &&
        !this.state.isRefreshing) {
        let diff = y - this.initY > 55 ? 55 : y - this.initY;
        this.state.isPullingDown
          ? this.setState({ pullDownHeight: diff })
          : this.setState({ isPullingDown: true, pullDownHeight: diff });
      }
    }, { passive: true });

    document.addEventListener('touchend', e => {
      if (this.state.isPullingDown && this.state.pullDownHeight > 0) {
        this.setState({ isPullingDown: false });
        if (this.state.pullDownHeight > 40)
          this.refreshTopics();
      }
    }, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  async refreshTopics() {
    try {
      this.setState({ isRefreshing: true });
      const response = await fetch(TOPICS_URL);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ topics: json.topics, isRefreshing: false });
    } catch (error) {
      console.log(error);
    }
  };

  async loadTopics() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(`${TOPICS_URL}&offset=${this.state.topics.length}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState(prevState => ({
        topics: [...prevState.topics, ...json.topics],
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
        <Headroom style={{ position: 'fixed' }}>
          <TopAppBar />
        </Headroom>
        <TopicList />
      </TopicContext.Provider>
    );
  }
}

export default TopicListContainer;
