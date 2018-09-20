import React from 'react';
import TopAppBar from '../components/TopAppBar';
import TopicList from '../components/TopicList';

export const TopicContext = React.createContext();

const dummyTopics = [];
for (let i = 0; i < 20; i++) {
  dummyTopics.push({
    "id": 123 * (i + 1),
    "title": "手机自适应的问题",
    "updated_at": "2018-09-17T18:01:22.393+08:00"
  })
}

class TopicListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.loadTopics = () => {
      // this.setState(state => ({
      //   topics: [...state.topics, moreTopics]
      // }));
      console.log("Loading topics");
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      topics: dummyTopics,
      loadTopics: this.loadTopics,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <TopicContext.Provider value={this.state}>
        <TopAppBar />
        <TopicList />
      </TopicContext.Provider>
    );
  }
}

export default TopicListContainer;
