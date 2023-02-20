package com.cda_project.cda_system_api.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.cda_project.cda_system_api.entity.UserEntity;
import com.cda_project.cda_system_api.model.User;
import com.cda_project.cda_system_api.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public User createUser(User user) {
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);
        return user;
    }



}
