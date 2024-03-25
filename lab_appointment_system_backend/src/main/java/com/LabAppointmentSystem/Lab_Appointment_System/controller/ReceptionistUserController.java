package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.ReceptionistUser;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.ReceptionistUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReceptionistUserController {

    @Autowired
    private ReceptionistUserRepository receptionistUserRepository;

    @PostMapping("/receptionist/addReceptionist")
    ReceptionistUser newUser(@RequestBody ReceptionistUser newUser) {
        return receptionistUserRepository.save(newUser);
    }

    @GetMapping("/receptionist")
    List<ReceptionistUser> getAllReceptionistUsers() {
        return receptionistUserRepository.findAll();
    }
}