import axios from "axios";

const RSVP_API_BASE_URL = "http://localhost:8081/api/v1/rsvpInfo";

class rsvpService {
    saveRsvpInfo(rsvpInfo) {
        return axios.post(RSVP_API_BASE_URL, rsvpInfo);
    }

    getRsvpInfos() {
        return axios.get(RSVP_API_BASE_URL);
    }

    deleteRsvpInfo(id) {
        return axios.delete(RSVP_API_BASE_URL + "/" + id);
    }

    getRsvpInfoByID(id) {
        return axios.get(RSVP_API_BASE_URL + "/" + id);
    }

    updateRsvpInfo(rsvpInfo, id) {
        return axios.put(RSVP_API_BASE_URL + "/" + id, rsvpInfo);
    }
}

export default new rsvpService();