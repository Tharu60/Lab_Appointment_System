package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.ReceptionistUser;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.ReceptionistUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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