package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.Report;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReportController {

    @Autowired
    private ReportRepository reportRepository;

    @PostMapping("/report/addReport")
    Report newUser(@RequestBody Report newUser){
        return reportRepository.save(newUser);
    }

    @GetMapping("/report")
    List<Report> getAllReports() {
        return reportRepository.findAll();
    }
}
