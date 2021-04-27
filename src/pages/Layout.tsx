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

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <>
      <Header />
      {!isLoading && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
