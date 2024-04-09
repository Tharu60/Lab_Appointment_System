package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.Appointments;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.AppointmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AppointmentsController {

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @PostMapping("/appointment/newAppointment")
    Appointments newAppointment(@RequestBody Appointments newAppointment) {
        return  appointmentsRepository.save(newAppointment);
    }

    @GetMapping("/appointment")
    List<Appointments> getAllAppointments() {
        return appointmentsRepository.findAll();
    }

}
