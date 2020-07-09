import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";
import { Route } from "react-router-dom";

export default class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios.get("/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  handlePostClicked(id) {
    this.props.history.push("/posts/" + id);
  }
  render() {
    console.log(this.props.match.url);
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          clicked={() => this.handlePostClicked(post.id)}
          author={post.author}
          title={post.title}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}
