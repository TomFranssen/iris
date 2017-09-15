import React, {Component} from 'react';
import Event from './Event';

class EventList extends Component {
    render() {

        console.log(this);

        let eventNodes = this.props.data.map(event => {
            return (
                <Event
                    uniqueID={event['_id']}
                    name={event['name']}
                    key={event['_id']}>
                    {event.name}
                </Event>
            )
        });
        return (
            <div>
                {eventNodes}
            </div>
        )
    }
}

export default EventList;