import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
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

    return (
      <div>
        <header>
          <nav className="BlogNav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
