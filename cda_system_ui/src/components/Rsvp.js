import React from "react";
import { useNavigate } from "react-router-dom";
import RsvpInfo from "./RsvpInfo";

const Rsvp = ({rsvp, deleteAttendee}) => {
    const navigate = useNavigate();

    const editRsvp = (e, id, eventAttendees) => {
        if (userName.firstName + " " + userName.lastName === eventAttendees) {
            e.preventDefault();
            navigate(`/moreInfo/${id}`);
        }
    }

    const userName = JSON.parse(localStorage.getItem("userName"))

    return (
        <tr key={rsvp.id}>
            <td>
                <div>{rsvp.eventAttendees}</div>
            </td>
            <td>
                <button
                onClick={(e, id, eventAttendees) => deleteAttendee(e, rsvp.id)}
                className = "button is-secondary">
                Delete
                </button>
            </td>
            <td>
                <button
                onClick={(e, id, eventAttendees) => editRsvp(e, rsvp.id, rsvp.eventAttendees)}
                className ="button is-light">
                Edit
                </button>
            </td>
        </tr>
    );
};

export default Rsvp;