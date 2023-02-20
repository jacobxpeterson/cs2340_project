import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rsvpService from "../services/rsvpService";

const AddRsvp = () => {
    const [RsvpInfo, setRsvpInfo] = useState ({
        id: "",
        eventAttendees: "",
        attending: "",
        maybe: "",
        notAttending: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setRsvpInfo({...RsvpInfo, [e.target.name]: value});
    };

    const saveRsvpInfo = (e) => {
        e.preventDefault();
        rsvpService.saveRsvpInfo(RsvpInfo)
        .then((response) => {
            console.log(response);
            navigate("/rsvpList");
        })
        .catch((error)=> {
            console.log(error);
        });
    };

    const reset = (e) => {
        e.preventDefault();
        setRsvpInfo({
            id: "",
            eventAttendees: "",
            attending: "",
            maybe: "",
            notAttending: "",
        });
    };


return (
    <div>
        <div className = "rows">
            <div className = "row is-four-fifths">
                <label>
                    Your Name
                </label>
                <input
                type="text"
                name="eventAttendees"
                value={RsvpInfo.eventAttendees}
                onChange={(e) => handleChange(e)}
                className = "input is-info"></input>
            </div>
            <div className = "row is-four-fifths">
                <label>
                    Attending?
                </label>
                <input
                type="text"
                name="attending"
                value={RsvpInfo.attending}
                onChange={(e) => handleChange(e)}
                className = "input is-info"></input>
            </div>
            <div className = "row is-four-fifths">
                <label>
                    Maybe Attending?
                </label>
                <input
                type="text"
                name="maybe"
                value={RsvpInfo.maybe}
                onChange={(e) => handleChange(e)}
                className = "input is-info"></input>
            </div>
            <div className = "row is-four-fifths">
                <label>
                    Not Attending?
                </label>
                <input
                type="text"
                name="notAttending"
                value={RsvpInfo.notAttending}
                onChange={(e) => handleChange(e)}
                className = "input is-info"></input>
            </div>
            <div>
                <button
                onClick={saveRsvpInfo}
                className="button is-primary">
                Save
                </button>
                <button
                onClick={reset}
                className="button is-primary">
                    Clear
                </button>
            </div>
        </div>
    </div>
    );
};

export default AddRsvp;