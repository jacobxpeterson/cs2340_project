package com.cda_project.cda_system_api.controller;

import org.springframework.web.bind.annotation.*;
import com.cda_project.cda_system_api.model.RsvpInfo;
import com.cda_project.cda_system_api.services.RsvpService;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RsvpController {
    @Autowired
    private final RsvpService rsvpService;
    public RsvpController(RsvpService rsvpService) {
        this.rsvpService = rsvpService;
    }
    @PostMapping("/rsvpInfo")
    public RsvpInfo createRsvpInfo(@RequestBody RsvpInfo rsvpInfo) {
        return rsvpService.createRsvpInfo(rsvpInfo);
    }


    @GetMapping("/rsvpInfo")
    public List<RsvpInfo> getAllRsvpInfos() {
        return rsvpService.getAllRsvpInfos();
    }

    @DeleteMapping("/rsvpInfo/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteRsvpInfo(@PathVariable Long id) {
        boolean deleted = false;
        deleted = rsvpService.deleteRsvpInfo(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/rsvpInfo/{id}")
    public ResponseEntity<RsvpInfo> getRsvpInfoByID(@PathVariable Long id) {
        RsvpInfo rsvpInfo = null;
        rsvpInfo = rsvpService.getRsvpInfoByID(id);
        return ResponseEntity.ok(rsvpInfo);
    }

    @PutMapping("/rsvpInfo/{id}")
    public ResponseEntity<RsvpInfo> updateRsvpInfo(@PathVariable Long id,
                                            @RequestBody RsvpInfo rsvpInfo) {
        rsvpInfo = rsvpService.updateRsvpInfo(id, rsvpInfo);
        return ResponseEntity.ok(rsvpInfo);
    }

    
}
