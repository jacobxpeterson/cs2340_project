package com.cda_project.cda_system_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.cda_project.cda_system_api.entity.RsvpEntity;


@Repository
public interface RsvpInfoRepository extends JpaRepository<RsvpEntity, Long> {
    
}