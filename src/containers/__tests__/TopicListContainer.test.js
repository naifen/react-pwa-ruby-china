import React from "react";
import { shallow } from "enzyme";
import TopicListContainer from "../TopicListContainer";

it("renders without crashing", () => {
  shallow(<TopicListContainer />);
});
