package com.cda_project.cda_system_api.entity;
import javax.persistence.*;



import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Data
@Table (name = "rsvpInfo")
@Getter
@Setter
public class RsvpEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String eventAttendees;
    private String attending;
    private String maybe;
    private String notAttending;
}
