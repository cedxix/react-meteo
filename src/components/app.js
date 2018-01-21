import React, {Component} from 'react';
import SearchBar from '../container/searchbar';
import WeatherList from '../container/weather-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <div className="Jumbotron">
                    <h2>Weather forecast</h2>
                </div>
                <div>
                    <WeatherList/>
                </div>
            </div>
        );
    }
}
