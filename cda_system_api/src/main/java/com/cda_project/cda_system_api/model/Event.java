package com.cda_project.cda_system_api.model;

import lombok.Data;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Event {
    private long id;
    private String title;
    private String creatorName;
    private String description;
    private String location;
    private String time;
    private String capacity;
    private String inviteOnly;
}
