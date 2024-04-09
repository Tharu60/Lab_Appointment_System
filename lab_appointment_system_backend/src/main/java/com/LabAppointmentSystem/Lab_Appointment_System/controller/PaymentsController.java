package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.Payments;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.PaymentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentsController {

    @Autowired
    private PaymentsRepository paymentsRepository;




}
