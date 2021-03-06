import React, { Component } from "react";
import "./css/App.css";
import Home from "./components/home";
import NewPost from "./components/newPost";
import PostDetail from "./components/postDetail";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/posts/newpost" render={props => <NewPost {...props} />} />
        <Route
          path="/posts/:id/edit"
          render={props => <NewPost {...props} />}
        />
        <Route
          path="/posts/:id"
          render={props => (
            <PostDetail allPosts={this.props.allPosts} {...props} />
          )}
        />
        <Route path="/" render={() => <Home />} />
      </Switch>
    );
  }
}

export default App;
