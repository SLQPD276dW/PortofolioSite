import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import './index.css';
import RouterConfig from './RouterConfig';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterConfig />
    <Footer />
  </React.StrictMode>
);
