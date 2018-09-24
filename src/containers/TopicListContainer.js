import React from 'react';
import Headroom from 'react-headroom'
import TopAppBar from '../components/TopAppBar';
import TopicList from '../components/TopicList';
import { TOPICS_URL } from '../utils/constants';
import {
  PULL_DOWN_MAX_HEIGHT,
  PULL_DOWN_RELEASE_HEIGHT,
  SCROLL_TRIGGER_HEIGHT,
} from '../utils/constants';

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

  componentDidMount() {
    this.handleTopicsFetch(
      TOPICS_URL,
      { isLoading: true },
      json => ({ topics: json.topics, isLoading: false })
    );

    window.addEventListener('scroll', this.onScroll, false);
    document.addEventListener('touchstart', this.onTouchStart, { passive: true });
    document.addEventListener('touchmove', this.onTouchMove, { passive: true });
    document.addEventListener('touchend', this.onTouchEnd, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  }

  handleTopicsFetch = async (url, beforeState, afterState) => {
    try {
      this.setState(beforeState);

      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();
      this.setState(prevState => afterState(json, prevState));
    } catch (error) {
      console.log(error);
    }
  }

  onScroll = () => {
    const windowTotalHeight = window.innerHeight + window.scrollY
    if (
      windowTotalHeight >= (document.body.offsetHeight - SCROLL_TRIGGER_HEIGHT) &&
      this.state.topics.length &&
      !this.state.isLoading
    ) {
      this.handleTopicsFetch(
        `${TOPICS_URL}&offset=${this.state.topics.length}`,
        { isLoading: true },
        (json, prevState) => ({
          topics: [...prevState.topics, ...json.topics],
          isLoading: false,
        })
      );
    }
  }

  onTouchStart = e => this.initY = e.touches[0].pageY

  onTouchMove = e => {
    const y = e.touches[0].pageY;

    if (document.scrollingElement.scrollTop === 0 && y > this.initY &&
      !this.state.isRefreshing) {
      let diff = y - this.initY > PULL_DOWN_MAX_HEIGHT
        ? PULL_DOWN_MAX_HEIGHT
        : y - this.initY;

      this.state.isPullingDown
        ? this.setState({ pullDownHeight: diff })
        : this.setState({ isPullingDown: true, pullDownHeight: diff });
    }
  }

  onTouchEnd = e => {
    if (this.state.isPullingDown && this.state.pullDownHeight > 0) {
      this.setState({ isPullingDown: false });

      if (this.state.pullDownHeight > PULL_DOWN_RELEASE_HEIGHT)
        this.handleTopicsFetch(
          TOPICS_URL,
          { isRefreshing: true },
          json => ({ topics: json.topics, isRefreshing: false })
        );
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
