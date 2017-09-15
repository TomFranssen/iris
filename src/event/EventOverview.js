import React, {Component} from 'react';
import axios from 'axios';
import EventList from './components/EventList';

class EventOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadEventsFromServer = this.loadEventsFromServer.bind(this);
    }

    loadEventsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({data: res.data});
            })
    }

    componentDidMount() {
        this.loadEventsFromServer();
    }

    render() {
        return (
            <div>
                TEST EVENTOVERVIEW
                <EventList data={this.state.data} />
            </div>
        )
    }
}

export default EventOverview;