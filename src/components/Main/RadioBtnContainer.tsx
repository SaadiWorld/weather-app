import { Box } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTemperatureUnit } from '../../store/main/action';
import { MainState, TempScaleEnum } from '../../store/main/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    box: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    radio: {
      color: '#2c4859',
      // '&$checked': {
      //   color: '#2c4859',
      // },
    },
  })
);

const RadioBtnContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tempUnit = useSelector<MainState, TempScaleEnum>(
    (state) => state.tempUnit
  );

  return (
    <div className={classes.root}>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="celsius"
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box className={classes.box}>
              <FormControlLabel
                value={TempScaleEnum.C}
                control={<Radio color="default" className={classes.radio} />}
                label="Celsius"
                checked={tempUnit === TempScaleEnum.C}
                onChange={() =>
                  dispatch(updateTemperatureUnit(TempScaleEnum.C))
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.box}>
              <FormControlLabel
                value={TempScaleEnum.F}
                control={<Radio color="default" className={classes.radio} />}
                label="Fahrenheit"
                checked={tempUnit === TempScaleEnum.F}
                onChange={() =>
                  dispatch(updateTemperatureUnit(TempScaleEnum.F))
                }
              />
            </Box>
          </Grid>
        </Grid>
      </RadioGroup>
    </div>
  );
};

export default RadioBtnContainer;
