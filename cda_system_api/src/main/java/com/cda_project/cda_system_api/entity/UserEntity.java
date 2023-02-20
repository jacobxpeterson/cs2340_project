package com.cda_project.cda_system_api.entity;

import javax.persistence.*;


import lombok.Data;

@Entity
@Data 
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String role;
    
}
