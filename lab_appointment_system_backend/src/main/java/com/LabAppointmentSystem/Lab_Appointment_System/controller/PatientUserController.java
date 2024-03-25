package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.PatientUser;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.PatientUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientUserController {
    @Autowired
    private PatientUserRepository patientUserRepository;

    @PostMapping("/patient/addPatient")
    PatientUser newUser(@RequestBody PatientUser newUser){
        return patientUserRepository.save(newUser);
    }

    @GetMapping("/patient")
    List<PatientUser> getAllPatientUsers(){
        return patientUserRepository.findAll();
    }
}
