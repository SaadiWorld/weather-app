import React from 'react';
import Layout from './pages/Layout';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
      <Layout />
      <ToastContainer />
    </div>
  );
};

export default App;
