import React from 'react';
import './Events.css';

function Events(props) {
    return (
        <div id="events" className="events-content">
            <div className="upcoming-events-title">Upcoming Events</div>
            <div className="events-list">
                {props.events.map(event => (
                    <div key={event.title} className="row row-inset pt-3 pb-3 border-bottom border-dark single-event">
                        <div className="col-sm-9 d-flex ">
                            <div className="flex-column-centered calendar-item">
                                <div className="date-month">{event.month}</div>
                                <div className="date-day">{event.day}</div>
                            </div>
                            <div className="event-details">
                                <div className="event-title">{event.title}</div>
                                <div>{event.description}</div>
                                { event.location ?
                                    <div> <i className="oi oi-map-marker mr-2 text-danger"></i>{event.location}</div>
                                    :
                                    null
                                }

                            </div>
                        </div>
                        <div className="col-sm-3">
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark ">{event.button}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;