import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import './index.scss';

const Home = () =>
/* #__PURE__ */React.createElement(Container, {
    className: 'home_container',
    maxWidth: 'xl',
  }, /* #__PURE__ */React.createElement(Header, null), 'Home');

export default Home;
