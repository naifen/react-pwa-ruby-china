import React from "react";
import Topic from "../components/Topic";
import { TOPIC_BASE_URL } from "../utils/constants";

// TODO: implements pull down fetch
// import {
//   PULL_DOWN_MAX_HEIGHT,
//   PULL_DOWN_RELEASE_HEIGHT,
//   SCROLL_TRIGGER_HEIGHT
// } from "../utils/constants";

class TopicContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      isLoading: false
      // isPullingDown: false,
      // pullDownHeight: 0,
      // isRefreshing: false
    };
  }

  componentDidMount() {
    this.handleTopicFetch(
      `${TOPIC_BASE_URL}/${this.props.match.params.topicId}`,
      { isLoading: true },
      json => ({
        topic: json.topic,
        isLoading: false
      })
    );
  }

  // TODO: DRY this out to utils function awa TopicListContainer
  handleTopicFetch = async (url, beforeState, afterState) => {
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
  };

  render() {
    return <Topic {...this.state} />;
  }
}

export default TopicContainer;
