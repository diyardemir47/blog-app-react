import React from 'react';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';
import { editBlogFromDatabase, removeBlogFromDatabase } from '../actions/blogs';
import 'bulma/css/bulma.min.css';

const EditBlogPage = (props) => {
  return (
    <div className="container">
      <h1 className="title">Edit Page</h1>
      <div className="columns is-centered">
        <div className="column is-half">
          <BlogForm
            blog={props.blog}
            onSubmit={(blog) => {
              props.dispatch(editBlogFromDatabase(props.blog.id, blog));
              props.history.push('/blogs');
            }}
          />
          <button
            className="button is-danger mt-4"
            onClick={() => {
              props.dispatch(removeBlogFromDatabase(props.blog.id));
              props.history.push('/blogs');
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((b) => b.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
