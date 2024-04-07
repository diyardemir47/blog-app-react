import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({ id, title }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ width: '50%' }}>
        <div className="card-content has-text-centered">
          <p className="title">{title}</p>
        </div>
        <footer className="card-footer">
          <Link to={`/blogs/${id}`} className="card-footer-item" style={{ backgroundColor: '#ffdd57' }}>
            <span className="icon">
              <i className="fas fa-info-circle"></i>
            </span>
            <span style={{ color: 'black' }}>Details</span>
          </Link>
          <Link to={`/edit/${id}`} className="card-footer-item" style={{ backgroundColor: '#ff3860' }}>
            <span className="icon">
              <i className="fas fa-edit"></i>
            </span>
            <span style={{ color: 'white' }}>Edit</span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BlogListItem;
