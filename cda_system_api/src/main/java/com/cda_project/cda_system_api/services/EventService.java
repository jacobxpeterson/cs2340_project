package com.cda_project.cda_system_api.services;

import com.cda_project.cda_system_api.model.Event;
import java.util.List;




public interface EventService {
    Event createEvent(Event event);
    
    List<Event> getAllEvents();

    boolean deleteEvent(Long id);

    Event getEventByID(Long id);

    Event updateEvent(Long id, Event event);
}
