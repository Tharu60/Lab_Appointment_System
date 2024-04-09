package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.exception.AdminUserNotFoundException;
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

    @GetMapping("/admins/{id}")
    AdminUser getUserById(@PathVariable Long id){
        return adminUserRepository.findById(id)
                .orElseThrow(()->new AdminUserNotFoundException(id));
    }

    @PutMapping("/admins/{id}")
    AdminUser updateAdminUser(@RequestBody AdminUser newAdminUser,@PathVariable Long id){
        return adminUserRepository.findById(id)
                .map(adminUser -> {
                    adminUser.setName(newAdminUser.getName());
                    adminUser.setEmail(newAdminUser.getEmail());
                    adminUser.setPassword(newAdminUser.getPassword());
                    adminUser.setM_number(newAdminUser.getM_number());
                    adminUser.setImage(newAdminUser.getImage());
                    return adminUserRepository.save(adminUser);
                }).orElseThrow(()->new AdminUserNotFoundException(id));
    }

    @DeleteMapping("/admins/{id}")
    String deleteAdminUser(@PathVariable Long id){
        if(!adminUserRepository.existsById(id)){
          throw new AdminUserNotFoundException(id);
        }
        adminUserRepository.deleteById(id);
        return "Admin With id "+id+" has been Deleted Success.";
    }
}
