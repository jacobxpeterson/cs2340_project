import React, {useEffect, useState, useMemo} from "react";
import "../App.css";
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import EventService from "../services/EventService";
import Event from "./Event";
import { useNavigate } from "react-router-dom";

const Map2 = () => {

    const crc = useMemo(() => ({ lat: 33.775700 , lng: -84.404240 }), []);
    const klaus = useMemo(() => ({ lat: 33.777071162161555 , lng: -84.39584804721594 }), []);
    const exhibitionHall = useMemo(() => ({ lat: 33.7749129186323 , lng: -84.4018598008721 }), []);
    const culc = useMemo(() => ({ lat: 33.774954256045575 , lng: -84.39639265299138 }), []);

    const center = useMemo(() => ({ lat: 33.771320 , lng: -84.393753 }), []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA4PjvvjGR-hs9XmjzxgJ0Xjk0Wju6KPa0",
    });

    const navigate = useNavigate();
    
    const displayMarkers = (event) => {
        const eventInfo = document.createElement("div");
        eventInfo.textContent = event.name;
        //eventInfo.onclick= navigate(`/editEvent/${event.id}`);

        if (event.location == "CRC") {
            return (
                <Marker
                position = {crc}
                onClick={() => navigate(`/editEvent/${event.id}`)}
                title={event.name}>
                </Marker>
            )

        } else if (event.location == "Klaus") {
            return (
                <Marker
                position={klaus}
                onClick={() => navigate(`/editEvent/${event.id}`)}>
                </Marker>
            )

        } else if (event.location == "Exhibition Hall") {
            return (
                <Marker
                position={exhibitionHall}
                onClick={() => navigate(`/editEvent/${event.id}`)}>
                </Marker>
            )

        } else if (event.location == "CULC") {
            return (
                <Marker
                position={culc}
                onClick={() => navigate(`/editEvent/${event.id}`)}>
                </Marker>
            )
        }
    };

    const [loading, setLoading] = useState(true);
    const[events, setEvents] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EventService.getEvents();
                setEvents(response.data);
                console.log(response.data);
                console.log("0: " + events[0]["location"]);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const printLocations = () => {
        events.map((event) => (
            console.log(event.id + ": " + event.location)
        ));
    };


    if(!isLoaded) return <div> Loading...</div>;
    return (
        <>
        <button onClick={printLocations}>print</button>
        <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
            {events.map((event) => (
                displayMarkers(event)
            ))}
        </GoogleMap></>
    );
}

export default Map2;