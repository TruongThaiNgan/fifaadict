import React from 'react';
import {
  Avatar, ListItemText, Typography,
} from '@mui/material';
import Grade from '../Grade';

type Props = {
  name: string,
  position: string | undefined,
  avatar: string | undefined,
  ovr: Number | undefined,
  sesson: string,
}

const PlayerSummaryShort : React.FC<Props> = (props: Props) => {
  const {
    name,
    position,
    avatar,
    ovr,
    sesson,
  } = props;
  return (
    <>
      <Avatar src={avatar}>{name[0]}</Avatar>
      <ListItemText
        primary={(
          <Typography
            component="span"
            variant="body2"
            color="inherit"
          >
            {name}
          </Typography>
                  )}
        secondary={(
          <Typography
            color="inherit"
          >
            {`${ovr}`}
          </Typography>
                  )}
      />

      <Typography
        color="inherit"
      >
        {sesson}
      </Typography>
      <Typography
        color="inherit"
      >
        {position}
      </Typography>
      <Grade gradeNumber={3} />
    </>
  );
};

export default PlayerSummaryShort;
