import {
  Card, CardContent, CardHeader, List, ListItem,
} from '@mui/material';
import React from 'react';
import PlayerSummaryShort from '../../components/PlayerSummaryShort';

const PickList : React.FC = () => (
  <Card className="section">
    <CardHeader title="Pick list" />
    <CardContent>
      <List>
        <ListItem><PlayerSummaryShort name="Cristiano Ronaldo" ovr={98} position="ST" avatar={undefined} sesson="Live" /></ListItem>
      </List>
    </CardContent>
  </Card>
);

export default PickList;
