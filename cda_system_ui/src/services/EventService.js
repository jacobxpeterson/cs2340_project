import axios from "axios";

const EVENT_API_BASE_URL = "http://localhost:8081/api/v1/events";

class EventService {
    saveEvent(event) {
        return axios.post(EVENT_API_BASE_URL, event);
    }

    getEvents() {
        return axios.get(EVENT_API_BASE_URL);
    }

    deleteEvent(id) {
        return axios.delete(EVENT_API_BASE_URL + "/" + id);
    }

    getEventByID(id) {
        return axios.get(EVENT_API_BASE_URL + "/" + id);
    }

    updateEvent(event, id) {
        return axios.put(EVENT_API_BASE_URL + "/" + id, event);
    }
}

export default new EventService();