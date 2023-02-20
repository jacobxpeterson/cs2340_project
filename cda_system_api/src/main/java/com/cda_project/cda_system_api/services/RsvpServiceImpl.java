package com.cda_project.cda_system_api.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.cda_project.cda_system_api.entity.RsvpEntity;
import com.cda_project.cda_system_api.model.RsvpInfo;
import com.cda_project.cda_system_api.repository.RsvpInfoRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class RsvpServiceImpl implements RsvpService {

    private RsvpInfoRepository rsvpInfoRepository;

    public RsvpServiceImpl(RsvpInfoRepository rsvpInfoRepository) {
        this.rsvpInfoRepository = rsvpInfoRepository;
    }

    @Override
    public RsvpInfo createRsvpInfo(RsvpInfo rsvpInfo) {
        RsvpEntity rsvpEntity = new RsvpEntity();

        BeanUtils.copyProperties(rsvpInfo, rsvpEntity);
        rsvpInfoRepository.save(rsvpEntity);
        return rsvpInfo;
    }

    @Override
    public List<RsvpInfo> getAllRsvpInfos() {
        List<RsvpEntity> rsvpEntities = rsvpInfoRepository.findAll();
        List<RsvpInfo> rsvpInfos = rsvpEntities.stream().map(ent -> new RsvpInfo(
                                                        ent.getId(),
                                                        ent.getEventAttendees(),
                                                        ent.getAttending(),
                                                        ent.getMaybe(),
                                                        ent.getNotAttending()))
                                                    .collect(Collectors.toList());
        return rsvpInfos;
    }

    @Override
    public boolean deleteRsvpInfo(Long id) {
        RsvpEntity rsvpInfo = rsvpInfoRepository.findById(id).get();
        rsvpInfoRepository.delete(rsvpInfo);
        return true;
    }

    @Override
    public RsvpInfo getRsvpInfoByID(Long id) {
        RsvpEntity rsvpEntity = rsvpInfoRepository.findById(id).get();
        RsvpInfo rsvpInfo = new RsvpInfo();
        BeanUtils.copyProperties(rsvpEntity, rsvpInfo);
        return rsvpInfo;
    }

    @Override
    public RsvpInfo updateRsvpInfo(Long id, RsvpInfo rsvpInfo) {
        RsvpEntity rsvpEntity = rsvpInfoRepository.findById(id).get();
        rsvpEntity.setEventAttendees(rsvpInfo.getEventAttendees());
        rsvpEntity.setAttending(rsvpInfo.getAttending());
        rsvpEntity.setMaybe(rsvpInfo.getMaybe());
        rsvpEntity.setNotAttending(rsvpInfo.getNotAttending());

        rsvpInfoRepository.save(rsvpEntity);
        return rsvpInfo;
    }

}
