import React from "react";
import Button from "@material-ui/core/Button";

const TopicContainer = props => (
  <div>
    <p>This is Topic Container</p>
    <p>Topic id: {props.match.params.topicId}</p>

    <Button variant="contained" onClick={() => window.history.back()}>
      Back to Topics
    </Button>
  </div>
);

export default TopicContainer;
