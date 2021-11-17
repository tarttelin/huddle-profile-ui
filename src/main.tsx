import React from 'react';
import ReactDOM from 'react-dom';
import { createClient, Provider } from 'urql';
import App from './App';
import { loadUser } from './auth/Auth';

const client = createClient({
  url: import.meta.env.OPS_GQL_ENDPOINT!! as string,
  fetchOptions: () => {
    const user = loadUser();
    return {
      headers: { authorization: `Bearer ${user!!.idToken}`}
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
