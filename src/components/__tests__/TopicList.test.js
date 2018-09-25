import React from "react";
import { shallow } from "enzyme";
import TopicList from "../TopicList";

describe("<TopicList />", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<TopicList />);
    expect(component).toMatchSnapshot();
  });
  it("should render banner text correctly with given strings", () => {
    const component = shallow(<TopicList classes={{}} />);
    expect(component).toMatchSnapshot();
  });
});
