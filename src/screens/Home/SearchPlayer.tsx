import {
  Card, CardContent, CardHeader, Grid, InputBase,
} from '@mui/material';
import React, { useState } from 'react';
import PositionBtn from '../../components/PositionBtnHome';
import { POSITION } from '../../contants';
import themeConfig from '../../contants/themeConfig';

const SearchPlayer : React.FC = () => {
  const [valueSearch, setValueSearch] = useState<string>('');

  const [listPositionChoosed, setListPositionChoosed] = useState<string[]>([]);

  const handleListPositionChoosed = (name : string) => {
    let listPosition = [...listPositionChoosed];
    if (listPosition.indexOf(name) >= 0) {
      listPosition = listPosition.filter((elm) => elm !== name);
    } else listPosition.push(name);

    setListPositionChoosed(listPosition);
  };

  return (
    <Card className="section search">
      <CardHeader title="Search" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputBase
              className="input-search"
              placeholder="Name"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={valueSearch}
              onChange={(e) => { setValueSearch(e.target.value); }}
            />
          </Grid>
          <Grid item xs={6}>
            <div className="football_pitch">
              <img className="football_img" src={themeConfig.img.FOOTBALL_PITCH} alt="footbal pitch" />
              {POSITION.map((name : string) => <PositionBtn name={name} choosed={listPositionChoosed.includes(name)} onClick={() => handleListPositionChoosed(name)} />)}
              <button className="clear-btn" type="button" onClick={() => { setListPositionChoosed([]); }}>Clear</button>
            </div>
          </Grid>
          <Grid item xs={6} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchPlayer;
