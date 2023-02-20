import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventService from "../services/EventService";


const AddEventForm = () => {
    const [event, setEvent] = useState ({
        id: "",  
        title: "",
        creatorName: "",
        description: "",
        location: "",
        time: "",
        capacity: "",
        inviteOnly: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEvent({...event, [e.target.name]: value});
    };

    const saveEvent = (e) => {
        e.preventDefault();
        EventService.saveEvent(event)
        .then((response) => {
            console.log(response);
            navigate("/eventList");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const reset = (e) => {
        e.preventDefault();
        setEvent({
            id: "",
            title: "",
            creatorName: "",
            description: "",
            location: "",
            time: "",
            capacity: "",
            inviteOnly: ""
        });
    };

    const choices = ["Yes", "No"]

    const inviteOnlyOptions = choices.map((inviteOnly, key) => (
        <option value={inviteOnly} key={key}>
            {inviteOnly}
        </option>
    ));

    const locationOptions = ["CRC", "Exhibition Hall", "Klaus", "CULC"]

    const locationMap = locationOptions.map((location, key) => (
        <option value={location} key={key}>
            {location}
        </option>
    ));

    return (
    <div>
        <div class ="rows">
            <div class="row is-four-fifths">
                <label>
                    Title
                </label>
                <input
                type="text"
                name="title"
                value={event.title}
                onChange={(e) => handleChange(e)}
                class = "input is-info"></input>
            </div>
            <div class="row is-four-fifths">
                <label>
                    Creator Name
                </label>
                <input
                type="text"
                name="creatorName"
                value={event.creatorName}
                onChange={(e) => handleChange(e)}
                class="input is-info"></input>
            </div>
            <div className="row is-four-fifths">
                <label>
                    Description
                </label>
                <input
                type="text"
                name="description"
                value={event.description}
                onChange={(e) => handleChange(e)}
                class="input is-info"></input>
            </div>

            <div className="row is-four-fifths">
                <label>
                    Location
                </label>
                <select onChange={(e) => handleChange(e)} name="location">
                    <option value={event.location}>Select an Option</option>
                    {locationMap}
                </select>
            </div>

            <div className="row is-four-fifths">
                <label>
                    Time
                </label>
                <input
                type="text"
                name="time"
                value={event.time}
                onChange={(e) => handleChange(e)}
                className="input is-info"></input>
            </div>
            <div className="row is-four-fifths">
                <label>
                    Capacity
                </label>
                <input
                type="text"
                name="capacity"
                value={event.capacity}
                onChange={(e) => handleChange(e)}
                class="input is-info"></input>
            </div>

            <div className="row is-four-fifths">
                <label>
                    Invite-Only
                </label>
                <select onChange={(e) => handleChange(e)} name="inviteOnly">
                    <option value={event.inviteOnly}>Select an Option</option>
                    {inviteOnlyOptions}
                </select>
            </div>

            <div>
                <button
                onClick={saveEvent}
                class="button is-primary">
                Save
                </button>
                <button
                onClick={reset}
                className = "button is-primary">
                Clear
                </button>
            </div>
        </div>
    </div>
    );
};

export default AddEventForm;
