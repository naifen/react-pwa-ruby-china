import React from "react";
import Topic from "../components/Topic";
import TopicNavigation from "../components/TopicNavigation";
import { TOPIC_BASE_URL } from "../utils/constants";
import fetchFrom from "../utils/fetchServices";

// TODO: implements pull down fetch
class TopicContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      isLoading: false,
      replies: [],
      isFetchingReplies: false,
      showScrollTop: false
    };
  }

  componentDidMount() {
    this.handleTopicFetch(
      `${TOPIC_BASE_URL}/${this.props.match.params.topicId}`,
      { isLoading: true },
      json => ({
        topic: json.topic,
        isLoading: false
      }),
      `${TOPIC_BASE_URL}/${this.props.match.params.topicId}/replies?limit=150`,
      { isFetchingReplies: true },
      json => ({
        replies: json.replies,
        isFetchingReplies: false
      })
    );

    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      this.setState({ showScrollTop: true });
    } else {
      this.setState({ showScrollTop: false });
    }
  };

  handleTopicFetch = async (
    url,
    beforeState,
    afterState,
    url2,
    beforeState2,
    afterState2
  ) => {
    try {
      this.setState(beforeState);
      const json = await fetchFrom(url);
      this.setState(afterState(json));

      // fetch replies only if topic has replies
      if (json.topic.replies_count > 0) {
        this.setState(beforeState2);

        const json2 = await fetchFrom(url2);
        this.setState(afterState2(json2));
      }
    } catch (error) {
      throw Error(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Topic {...this.state} />
        <TopicNavigation likesCount={this.state.topic.likes_count || 0} />
      </React.Fragment>
    );
  }
}

export default TopicContainer;
