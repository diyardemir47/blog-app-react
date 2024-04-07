import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.blog ? props.blog.title : '',
      description: props.blog ? props.blog.description : '',
      error: '',
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.description) {
      this.setState({ error: 'Lütfen tüm alanları doldurunuz.' });
    } else {
      this.setState({ error: '' });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now(),
      });
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.error && <p className="has-text-danger">{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter title"
                value={this.state.title}
                onChange={this.onTitleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter description"
                value={this.state.description}
                onChange={this.onDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
