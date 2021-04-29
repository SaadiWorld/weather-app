import axios from 'axios';
import moment from 'moment';
import { ThunkAction } from 'redux-thunk';
import { API_URL, KelvinToFahrenheit } from '../../lib/utils/common';
import {
  addWeatherData,
  updateLoaderStatus,
  updateSelectedDate,
} from './action';
import { MainAction, MainState, WeatherDataByDate } from './types';

export function fetchWeatherData(): ThunkAction<
  void,
  MainState,
  undefined,
  MainAction
> {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data);
      const result = data.list.reduce((dateGroups: any, weather: any) => {
        const date = moment(weather?.dt_txt).format('MMMM DD, YYYY');
        const weatherInfo: WeatherDataByDate = {
          time: weather.dt_txt,
          timestamp: weather.dt,
          temp: KelvinToFahrenheit(weather.main.temp),
        };
        if (date) {
          if (!dateGroups[date]) {
            dateGroups[date] = [];
          }
          dateGroups[date].push(weatherInfo);
        }
        return dateGroups;
      }, {});
      console.log(result);
      dispatch(addWeatherData(result));
      dispatch(updateSelectedDate(Object.keys(result)[0]));
      dispatch(updateLoaderStatus(false));
    } catch (e) {
      console.log('Error occurred while fetching data!', e);
    }
  };
}
