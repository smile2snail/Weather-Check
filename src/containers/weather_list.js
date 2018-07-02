import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import Ktocf from '../components/ktocf';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const weas = cityData.list.map(weather => weather.main.temp);
    const des = cityData.list.map(weather => weather.weather[0].description);
    const temps = cityData.list.map(weather => weather.main.temp);
    const {lon, lat}= cityData.city.coord;
    const icon = cityData.list.map(weather => weather.weather[0].icon);
    const url = 'https://openweathermap.org/img/w/' + icon[0] + '.png';

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Ktocf data={weas[0]} />
          {des[0]} <br/>
          <img src={url} alt='' />
        </td>
        <td><Chart data={temps} color='orange' units='°C'/></td>
      </tr>
    );
  }


  render() {
    return (
      <table className = 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Current Weather</th>
            <th>
            Temperature Trend in next 5 Days <br/>
            Forecast Every 3 Hours</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather: weather};
}

export default connect(mapStateToProps)(WeatherList);
