import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions';

class Searchbar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    onInputChange(event) {
        const val = event.target.value;
        this.setState({term: val})
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        // clear input field
        this.setState({term: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
                    <input type="text"
                           placeholder="City's name"
                           className="form-control"
                           value={this.state.term}
                           onChange={(event) => this.onInputChange(event)}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary"> Search</button>
                    </span>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather}, dispatch);
};


// null is reserved to state
export default connect(null, mapDispatchToProps)(Searchbar)