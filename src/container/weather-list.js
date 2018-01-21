import React, {Component} from 'react';
import {connect} from 'react-redux';

import Graph from './../components/graph';

class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {

        if (!cityData) {
            return;
        }

        console.log('api', cityData);

        const name = cityData.city.name;
        const temps = cityData.list.map((weather) => weather.main.temp);
        const pressure = cityData.list.map((weather) => weather.main.pressure);
        const humidity = cityData.list.map((weather) => weather.main.humidity);
        console.log('temperature', temps);

        return (
            <tr key={name}>
                <td>{name}, {cityData.city.country}</td>
                <td><Graph data={temps} color="red" units="K"/></td>
                <td><Graph data={pressure} color="green" units="hPa"/></td>
                <td><Graph data={humidity} color="blue" units="%"/></td>
            </tr>
        )
    }

    render() {
        const cityTemperatures = this.props.weather.map((weather) => {
            return this.renderWeather(weather)
        });

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                    </thead>
                    <tbody>{cityTemperatures}</tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = ({weather}) => {
    return {weather}
};


// null is reserved to state
export default connect(mapStateToProps)(WeatherList)