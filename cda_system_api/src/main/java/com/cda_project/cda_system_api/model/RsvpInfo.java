package com.cda_project.cda_system_api.model;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RsvpInfo {
    private long id;
    private String eventAttendees;
    private String attending;
    private String maybe;
    private String notAttending;
}
