package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.TechnicianUser;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.TechnicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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
