import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { handleTempFormatNumber } from '../../lib/utils/common';
import { getTempByDate } from '../../store/main/selectors';
import {
  MainState,
  TempScaleEnum,
  WeatherDataByDate,
} from '../../store/main/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
  })
);

interface Dataset {
  label: string;
  backgroundColor: string;
  borderColor: string;
  data: number[];
  fill?: boolean;
  color?: string;
  lineTension?: number;
  borderWidth?: number;
}

interface BarChartData {
  datasets: Dataset[];
  labels: string[] | number[];
  color?: string;
}

const ChartContainer = () => {
  const classes = useStyles();
  const tempUnit = useSelector<MainState, TempScaleEnum>(
    (state) => state.tempUnit
  );
  const selectedDate = useSelector<MainState, string>(
    (state) => state.selectedDate
  );
  const selectedDateData = useSelector<MainState, WeatherDataByDate[]>(
    getTempByDate(selectedDate)
  );
  const [barChartData, setBarChartData] = useState<BarChartData>({
    datasets: [],
    labels: [],
  });

  console.log('selectedDateData', selectedDateData);

  useEffect(() => {
    const newAgentsOverview: BarChartData = {
      // ...barChartData,
      labels: selectedDateData.map((el) => moment(el.time).format('hh:mm A')),
      datasets: [
        {
          label: `Temperature (${tempUnit})`,
          backgroundColor: '#2c4859',
          borderColor: '#2c4859',
          data: selectedDateData.map((el) =>
            handleTempFormatNumber(el.temp, tempUnit)
          ),
        },
      ],
    };

    setBarChartData(newAgentsOverview);
    return () => {
      //cleanup;
    };
  }, [selectedDateData, tempUnit]);

  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 12,
      },
    },
    scales: {
      yAxes: [
        {
          id: 'main-axis',
          ticks: {
            stepSize: 10, // this worked as expected
            display: false,
          },
        },
      ],
      // xAxes: [{
      //     id: 'main-x-axis',
      //     ticks: {
      //         stepSize: 30 // this did not work as expected
      //     }
      // }]
    },
  };

  // const donutRef = useRef<Bar | null>(null);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box>
            <div className="chart-container">
              {/* <Bar ref={donutRef} options={options2} data={chartData} /> */}
              <Bar type="chart" options={options2} data={barChartData} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartContainer;
