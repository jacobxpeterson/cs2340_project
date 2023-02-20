package com.cda_project.cda_system_api.services;

import com.cda_project.cda_system_api.model.RsvpInfo;
import java.util.List;




public interface RsvpService {
    RsvpInfo createRsvpInfo(RsvpInfo rsvpInfo);
    
    List<RsvpInfo> getAllRsvpInfos();

    boolean deleteRsvpInfo(Long id);

    RsvpInfo getRsvpInfoByID(Long id);

    RsvpInfo updateRsvpInfo(Long id, RsvpInfo rsvpInfo);
}

