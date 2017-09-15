import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';
import EventOverview from './event/EventOverview';

ReactDOM.render(
    <EventOverview url='http://localhost:3001/api/events' pollInterval={2000} />,
    document.getElementById('event-overview')
);

// ReactDOM.render(
//     <CommentBox url='http://localhost:3001/api/comments' pollInterval={5000}/>,
//     document.getElementById('root')
// );
//
