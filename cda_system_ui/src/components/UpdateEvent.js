import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventService from "../services/EventService";

const UpdateEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        id: id,
        title: "",
        creatorName: "",
        description: "",
        location: "",
        time: "",
        capacity: "",
        inviteOnly: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEvent({...event, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EventService.getEventByID(event.id);
                setEvent(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateEvent = (e) => {
        e.preventDefault();
        console.log(event.location);
        EventService.updateEvent(event, id)
        .then((response) => {
            navigate("/eventList");
        })
        .catch((error) => {
            console.log(error);
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
            <div>
                <div>
                    <h1>Update Event</h1>
                </div>
                <div>
                    <label>
                        Title
                    </label>
                    <input
                    type="text"
                    name="title"
                    value={event.title}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
                </div>
                <div>
                    <label>
                        Creator Name
                    </label>
                    <input
                    type="text"
                    name="creatorName"
                    value={event.creatorName}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
                </div>
                <div>
                    <label>
                        Description
                    </label>
                    <input
                    type="text"
                    name="description"
                    value={event.description}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
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
                <div>
                    <label>
                        Time
                    </label>
                    <input
                    type="test"
                    name="time"
                    value={event.time}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
                </div>
                <div>
                    <label>
                        Capacity
                    </label>
                    <input
                    type="test"
                    name="capacity"
                    value={event.capacity}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
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
                    onClick={updateEvent}
                    className="button is-primary">
                    Update
                    </button>
                    <button
                    onClick={() => navigate("/eventList")}
                    className = "button is-primary">
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateEvent;