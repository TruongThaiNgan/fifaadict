import React from 'react';
import {
  Button,
} from '@mui/material';

import './index.scss';

type Props = {
  gradeNumber: Number,
}

const Grade : React.FC<Props> = (props: Props) => {
  const { gradeNumber } = props;
  return (
    <Button className="gradeBtn">
      {`+${gradeNumber}`}
    </Button>
  );
};

export default Grade;
