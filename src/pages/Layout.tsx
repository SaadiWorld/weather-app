import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main/index';
import { fetchWeatherData } from '../store/main/thunk';
import { MainState } from '../store/main/types';

const Layout = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector<MainState, boolean>((state) => state.isLoading);
  const isError = useSelector<MainState, boolean>((state) => state.isError);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : !isError ? (
        <>
          <Main />
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Layout;
