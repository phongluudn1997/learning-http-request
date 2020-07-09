import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";
import "./Posts.css";

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
    this.setState({ selectedPostId: id });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          clicked={() => this.handlePostClicked(post.id)}
          author={post.author}
          title={post.title}
          key={post.id}
        />
      );
    });

    return <section className="Posts">{posts}</section>;
  }
}
