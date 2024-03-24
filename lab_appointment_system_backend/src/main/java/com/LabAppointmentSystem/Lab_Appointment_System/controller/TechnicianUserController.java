package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.TechnicianUser;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.TechnicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TechnicianUserController {

    @Autowired
    private TechnicianRepository technicianRepository;

    @PostMapping("/technician/addTechnician")
    TechnicianUser newUser(@RequestBody TechnicianUser newUser){
        return technicianRepository.save(newUser);
    }

    @GetMapping("/technician")
    List<TechnicianUser> getAllTechnicianUsers(){
        return technicianRepository.findAll();
    }
}
