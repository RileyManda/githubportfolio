import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from './redux/store';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)