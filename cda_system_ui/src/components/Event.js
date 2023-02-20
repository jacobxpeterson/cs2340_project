import React from "react";
import { useNavigate } from "react-router-dom";

const Event = ({event, deleteEvent}) => {
    const navigate = useNavigate();
    const editEvent = (e, id) => {
        e.preventDefault();
        navigate(`/editEvent/${id}`);
    };
    const moreInfo = (e, id, creatorName, inviteOnly) => {
        if (userName.firstName + " " + userName.lastName === creatorName || inviteOnly === "No") {
            e.preventDefault();
            navigate(`/addRsvp`);
        }
    };
    const userName = JSON.parse(localStorage.getItem("userName"))

    return (
        <tr key={event.id}>
            <td>
                <div>{event.title}</div>
            </td>
            <td>
                <div>{event.creatorName}</div>
            </td>
            <td>
                <div>{event.description}</div>
            </td>
            <td>
                <div>{event.location}</div>
            </td>
            <td>
                <div>{event.time}</div>
            </td>
            <td>
                <div>{event.capacity}</div>
            </td>
            <td>
                <div>{event.inviteOnly}</div>
            </td>
            <td>
                <button
                onClick={(e,id) => editEvent(e, event.id)}
                className = "button is-light">
                Edit
                </button>
                <button
                onClick={(e, id, creatorName) => deleteEvent(e, event.id, event.creatorName)}
                className = "button is-secondary">
                Delete
                </button>
                <button
                onClick={(e, id, creatorName) => moreInfo(e, event.id, event.creatorName, event.inviteOnly)}
                className = "button is-secondary">
                RSVP Info
                </button>
            </td>
        </tr>
    );
};

export default Event;