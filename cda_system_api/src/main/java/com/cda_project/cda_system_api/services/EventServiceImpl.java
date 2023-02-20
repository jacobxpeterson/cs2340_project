package com.cda_project.cda_system_api.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.cda_project.cda_system_api.entity.EventEntity;
import com.cda_project.cda_system_api.model.Event;
import com.cda_project.cda_system_api.repository.EventRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class EventServiceImpl implements EventService {

    private EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Event createEvent(Event event) {
        EventEntity eventEntity = new EventEntity();

        BeanUtils.copyProperties(event, eventEntity);
        eventRepository.save(eventEntity);
        return event;
    }

    @Override
    public List<Event> getAllEvents() {
        List<EventEntity> eventEntities = eventRepository.findAll();
        List<Event> events = eventEntities.stream().map(ent -> new Event(
                                                        ent.getId(),
                                                        ent.getTitle(),
                                                        ent.getCreatorName(),
                                                        ent.getDescription(),
                                                        ent.getLocation(),
                                                        ent.getTime(),
                                                        ent.getCapacity(),
                                                        ent.getInviteOnly()))
                                                    .collect(Collectors.toList());
        return events;
    }

    @Override
    public boolean deleteEvent(Long id) {
        EventEntity event = eventRepository.findById(id).get();
        eventRepository.delete(event);
        return true;
    }

    @Override
    public Event getEventByID(Long id) {
        EventEntity eventEntity = eventRepository.findById(id).get();
        Event event = new Event();
        BeanUtils.copyProperties(eventEntity, event);
        return event;
    }

    @Override
    public Event updateEvent(Long id, Event event) {
        EventEntity eventEntity = eventRepository.findById(id).get();
        eventEntity.setTitle(event.getTitle());
        eventEntity.setCreatorName(event.getCreatorName());
        eventEntity.setDescription(event.getDescription());
        eventEntity.setLocation(event.getLocation());
        eventEntity.setTime(event.getTime());
        eventEntity.setCapacity(event.getCapacity());
        eventEntity.setInviteOnly(event.getInviteOnly());

        eventRepository.save(eventEntity);
        return event;
    }


    
}
