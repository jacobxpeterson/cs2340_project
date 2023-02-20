package com.cda_project.cda_system_api.controller;

import org.springframework.web.bind.annotation.*;
import com.cda_project.cda_system_api.model.Event;
import com.cda_project.cda_system_api.services.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EventController {
    @Autowired
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping("/events")
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }


    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @DeleteMapping("/events/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEvent(@PathVariable Long id) {
        boolean deleted = false;
        deleted = eventService.deleteEvent(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventByID(@PathVariable Long id) {
        Event event = null;
        event = eventService.getEventByID(id);
        return ResponseEntity.ok(event);
    }

    @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id,
                                            @RequestBody Event event) {
        event = eventService.updateEvent(id, event);
        return ResponseEntity.ok(event);
    }

    
}
