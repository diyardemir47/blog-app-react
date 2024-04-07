import React from 'react';
import { Card } from 'semantic-ui-react';

const BlogDetailsItem = ({ id, title, description }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '50%', margin: '0 50px' }}>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Blog ID: {id}</p>
          <div className="buttons has-addons is-centered">
            <button className="button is-info">
              <span className="icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <span>Details</span>
            </button>
            <button className="button is-warning">
              <span className="icon">
                <i className="fas fa-edit"></i>
              </span>
              <span>Edit</span>
            </button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default BlogDetailsItem;
