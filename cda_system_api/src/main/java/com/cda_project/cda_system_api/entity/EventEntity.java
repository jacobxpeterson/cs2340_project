package com.cda_project.cda_system_api.entity;

import javax.persistence.*;



import lombok.Data;


@Entity
@Data
@Table (name = "events")
public class EventEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String creatorName;
    private String description;
    private String location;
    private String time;
    private String capacity;
    private String inviteOnly;
}
