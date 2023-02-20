import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import EventService from "../services/EventService";
import Event from "./Event";
import "../App.css";

const EventList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const[events, setEvents] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EventService.getEvents();
                setEvents(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();

    }, []);

    const deleteEvent = (e, id, creatorName) => {
        if ((userName.firstName + " " + userName.lastName) === creatorName) {
            e.preventDefault();
            EventService.deleteEvent(id).then((res) => {
            if (events) {
                setEvents((prevElement) => {
                    return prevElement.filter((event) => event.id !== id);
                });
            }
            });
        }
    };

    

const userName = JSON.parse(localStorage.getItem("userName"))

return (
    <div>
      <div id="id1" className= "box has-text-centered">
      <h1 className="title">Upcoming Events</h1>
      <h3 className="title is-6">Logged in as: {userName.firstName} {userName.lastName}</h3>
      <Link to="/addEvent">
        <button className="btn btn-primary center">Add Event</button>
      </Link>
      </div>
        <div>
            <table class="table center table-bordered is-hoverable">
                <thead>
                    <tr>
                        <th scope="col">
                            Title
                        </th>
                        <th scope="col">
                            Creator Name
                        </th>
                        <th scope="col">
                            Description
                        </th>
                        <th scope="col">
                            Location
                        </th>
                        <th scope="col">
                            Time
                        </th>
                        <th scope="col">
                            Capacity
                        </th>
                        <th scope="col">
                            Invite-Only
                        </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody>
                        {events.map((event) => (
                            <Event
                            event={event}
                            deleteEvent={deleteEvent}
                            key={event.id} scope="row"></Event>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
    );
 };

 export default EventList;
  
