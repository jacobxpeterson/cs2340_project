import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import rsvpService from "../services/rsvpService";

const RsvpInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [rsvpInfo, setRsvpInfo] = useState({
        id: id,
        eventAttendees: "",
        attending: "",
        maybe: "",
        notAttending: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setRsvpInfo({...rsvpInfo, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await rsvpService.getRsvpInfoByID(rsvpInfo.id);
                setRsvpInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateRsvpInfo = (e) => {
        e.preventDefault();
        console.log(rsvpInfo);
        rsvpService.updateRsvpInfo(rsvpInfo, id)
        .then((response) => {
            navigate("/rsvpList");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <div>
                <div>
                    <h1>Update Your Status</h1>
                </div>
                <div>
                    <label>
                        Attending?
                    </label>
                    <input
                    type="text"
                    name="Type Yes in this Box if you would like to RSVP"
                    value={rsvpInfo.attending}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
                </div>
                <div>
                    <label>
                        Maybe Attending?
                    </label>
                    <input
                    type="text"
                    name="Type Yes in this Box if you are unsure of your status"
                    value={rsvpInfo.maybe}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
                </div>
                <div>
                    <label>
                        Not Attending
                    </label>
                    <input
                    type="text"
                    name="Type Yes in this Box if you are confirmed not attending"
                    value={rsvpInfo.notAttending}
                    onChange={(e) => handleChange(e)}
                    className = "input is-info"></input>
                </div>
                <div>
                    <button
                    onClick={updateRsvpInfo}
                    className="button is-primary">
                    Update Status
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

export default RsvpInfo;
