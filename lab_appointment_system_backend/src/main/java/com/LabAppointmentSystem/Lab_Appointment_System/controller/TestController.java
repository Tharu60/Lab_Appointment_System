package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.Test;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    @Autowired
    private TestRepository testRepository;

    @PostMapping("/test/addTest")
    Test newUser(@RequestBody Test newUser){
        return testRepository.save(newUser);
    }

    @GetMapping("/test")
    List<Test> getAllTests() {
        return testRepository.findAll();
    }
}
