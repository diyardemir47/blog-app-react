import React from 'react';
import { Button } from 'semantic-ui-react';
import { login } from '../actions/auth';

const LoginPage = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <article className="message is-warning">
      <div className="message-header">
        <p>Warning</p>
      </div>
      <div className="message-body">
        <div>
          <p>Merhaba, Hoşgeldiniz!</p>
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png' alt='Google Logo' style={{ width: '100px', marginBottom: '20px' }} />
          <Button color='google plus' onClick={login}>
            Login with Google
          </Button>
        </div>
      </div>
    </article>
  </div>
);

export default LoginPage;
