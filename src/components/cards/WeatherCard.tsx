import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTempFormatString } from '../../lib/utils/common';
import { updateSelectedDate } from '../../store/main/action';
import { getAvgTempByDate } from '../../store/main/selectors';
import { MainState, TempScaleEnum } from '../../store/main/types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor: 'pointer',

    '&.selected': {
      border: '1px solid #2c4859',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface WeatherCardProps {
  date: string;
}

const WeatherCard = ({ date }: WeatherCardProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tempUnit = useSelector<MainState, TempScaleEnum>(
    (state) => state.tempUnit
  );
  const selectedDate = useSelector<MainState, string>(
    (state) => state.selectedDate
  );
  const avgTemp = useSelector<MainState, number>(getAvgTempByDate(date));

  return (
    <Card
      className={`${classes.root} ${selectedDate === date ? 'selected' : ''}`}
      // variant="outlined"
      onClick={() => dispatch(updateSelectedDate(date))}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {handleTempFormatString(avgTemp, tempUnit)}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" component="p">
          {date}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
