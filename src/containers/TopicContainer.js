import React from "react";
import Topic from "../components/Topic";
import TopicNavigation from "../components/TopicNavigation";
import { TOPIC_BASE_URL } from "../utils/constants";

// TODO: implements pull down fetch
class TopicContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: {},
      isLoading: false,
      replies: [],
      isFetchingReplies: false
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

      // fetch replies
      if (json.topic.replies_count > 0) {
        this.setState({ isFetchingReplies: true });

        const responseR = await fetch(
          `${TOPIC_BASE_URL}/${
            this.props.match.params.topicId
          }/replies?limit=150`
        );
        if (!responseR.ok) {
          throw Error(responseR.statusText);
        }

        const jsonR = await responseR.json();
        this.setState({
          replies: jsonR.replies,
          isFetchingReplies: false
        });
      }
    } catch (error) {
      console.log(error);
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
