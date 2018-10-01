import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TopicListContainer from "../containers/TopicListContainer";
import TopicContainer from "../containers/TopicContainer";
import LoginForm from "../components/LoginForm";
import NodeList from "../components/NodeList";
import Node from "../components/Node";

// TODO: replace temp mock auth service with real one
const MockAuth = { isAuthenticated: false };

// TODO: replace these temp components with real ones
const Compose = () => <div>This is Compose component</div>;
const Account = () => <div>This is Account component</div>;
const Notifications = () => <div>This is Notifications component</div>;
const Bookmarks = () => <div>This is Bookmarks component</div>;
const Notes = () => <div>This is Notes component</div>;
const Wikis = () => <div>This is Wikis component</div>;
const Register = () => <div>This is Register component</div>;

const RestrictRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        MockAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const routes = (
  <Switch>
    <Route exact path="/" component={TopicListContainer} />
    <Route exact path="/topics" component={TopicListContainer} />
    <Route path="/topics/:topicId" component={TopicContainer} />
    <Route exact path="/nodes" component={NodeList} />
    <Route path="/nodes/:nodeId" component={Node} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={Register} />
    <RestrictRoute path="/account" component={Account} />
    <RestrictRoute path="/compose" component={Compose} />
    <RestrictRoute path="/notifications" component={Notifications} />
    <RestrictRoute path="/bookmarks" component={Bookmarks} />
    <RestrictRoute path="/notes" component={Notes} />
    <RestrictRoute path="/wikis" component={Wikis} />
  </Switch>
);

export default routes;
