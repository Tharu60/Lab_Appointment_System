package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.model.AdminUser;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminUserController {

    @Autowired
    private AdminUserRepository adminUserRepository;

    @PostMapping("/adminRegister")
    AdminUser newUser(@RequestBody AdminUser newUser){
        return adminUserRepository.save(newUser);
    }

    @GetMapping("/admins")
    List<AdminUser> getAllAdminUsers(){
        return adminUserRepository.findAll();
    }
}
