import {
  AppBar, Button, Toolbar, Typography, Container, Select, MenuItem, SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching.js';
import I18n from '../../language/i18n';

const Header : React.FC = () => {
  const [language, setLanguage] = useState<String>('en');

  return (
    <AppBar className="header-container" position="static" color="inherit">
      <Container className="header_container--between" maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                // flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              F
              <LocationSearchingIcon fontSize="small" color="error" style={{ marginBottom: -3 }} />
              4
            </Typography>
            <Button color="inherit" component="a">
              {(I18n.t('header.button.home') as String)}
            </Button>
            <Button color="inherit" component="a">
              {(I18n.t('header.button.lineUp') as String)}
            </Button>
            <Button color="inherit" component="a">
              {(I18n.t('header.button.calculator') as String)}
            </Button>
          </div>
          <Select
            value={language}
            onChange={(e: SelectChangeEvent<String>) => setLanguage(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="en">En</MenuItem>
            <MenuItem value="vi">Vi</MenuItem>
          </Select>
          <Button variant="outlined" color="inherit">{(I18n.t('header.button.login') as String)}</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
