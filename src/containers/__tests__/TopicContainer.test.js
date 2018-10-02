import React from "react";
import { shallow } from "enzyme";
import TopicContainer from "../TopicContainer";

it("renders without crashing", () => {
  shallow(<TopicContainer match={{ params: { topicId: 36087 } }} />);
});
