import {
  Container, Grid,
} from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import CalculatorMini from './CalculatorMini';
import PickList from './PickList';
import SearchPlayer from './SearchPlayer';

const Home : React.FC<any> = () => (
  <div className="home_screen">
    <Header />
    <Container className="home_container" maxWidth="xl">
      <Grid container spacing={3} style={{ marginTop: 10 }}>
        <Grid item xs={3}>
          <CalculatorMini />
        </Grid>
        <Grid item xs={6}>
          <SearchPlayer />
        </Grid>
        <Grid item xs={3}>
          <PickList />
        </Grid>
      </Grid>
    </Container>
  </div>
);

Home.defaultProps = {

};
export default Home;
