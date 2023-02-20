package com.cda_project.cda_system_api.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cda_project.cda_system_api.model.User;
import com.cda_project.cda_system_api.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private final UserService userService;

    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
         return userService.createUser(user);

    }

    
    
}
