import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import rsvpService from "../services/rsvpService";
import Rsvp from "./Rsvp";
import "../App.css";

const RsvpList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const[RsvpInfo, setRsvpInfo] = useState(null);

 
    useEffect (() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await rsvpService.getRsvpInfos();
                setRsvpInfo(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    const deleteAttendee = (e, id, eventAttendees) => {
            e.preventDefault();
            rsvpService.deleteRsvpInfo(id).then((res) => {
            if (RsvpInfo) {
                setRsvpInfo((prevElement) => {
                    return prevElement.filter((RsvpInfo) => RsvpInfo.id !== id);
                });
            }
            });
    };


const userName = JSON.parse(localStorage.getItem("userName"))

return (
    <div>
      <div id="id1" className= "box has-text-centered">
      <h1 className="title">RSVP INFO</h1>
      <h3 className="title is-6">Logged in as: {userName.firstName} {userName.lastName}</h3>
      <h4 className="title is-6">Current Capacity: </h4>
      </div>
        <div>
            <table class="table center table-bordered is-hoverable" id="isaac">
                <thead>
                    <tr>
                        <th scope="col">
                            Attending
                        </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody>
                        {RsvpInfo.map((RsvpInfo) => (
                            <Rsvp
                            rsvp={RsvpInfo}
                            deleteAttendee={deleteAttendee}
                            key={RsvpInfo.id} scope="row"></Rsvp>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
    );
 };

 export default RsvpList;