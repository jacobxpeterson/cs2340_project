
import "./App.css";
import Nav from "./Nav";
import About from "./pages/About";
import EventList from "./components/EventList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AddEvent from "./pages/AddEvent";
import Login from "./pages/Login";
import UpdateEvent from "./components/UpdateEvent";
import RsvpInfo from "./components/RsvpInfo";
import RsvpList from "./components/RsvpList";
import AddRsvp from "./components/AddRsvp";
import Map2 from "./components/Map2";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/eventList" element={<EventList />} />
        <Route path="/rsvpList" element={<RsvpList />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/editEvent/:id" element ={<UpdateEvent />} />
        <Route path ="/moreInfo/:id" element = {<AddRsvp />} />
        <Route path ="/map" element={<Map2 />} />
      </Routes>
    </Router>
  );
}

export default App;
