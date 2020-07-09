import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";
import { Redirect } from "react-router";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    isSubmitted: false,
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", post).then((res) => {
      console.log(res);
      this.props.history.replace("/posts");

      // this.props.history.push("/posts");

      // this.setState({
      //   isSubmitted: true,
      // });
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let redirect = null;
    if (this.state.isSubmitted) {
      redirect = <Redirect to="/" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />
        <label>Content</label>
        <textarea
          name="content"
          rows="4"
          value={this.state.content}
          onChange={(e) => this.handleChange(e)}
        />
        <label>Author</label>
        <select
          name="author"
          value={this.state.author}
          onChange={(e) => this.handleChange(e)}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
