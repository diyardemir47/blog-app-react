import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="notification is-danger has-text-centered">
              <h1 className="title">404 Page Not Found</h1>
              <p className="subtitle">Oops! The page you are looking for does not exist.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
