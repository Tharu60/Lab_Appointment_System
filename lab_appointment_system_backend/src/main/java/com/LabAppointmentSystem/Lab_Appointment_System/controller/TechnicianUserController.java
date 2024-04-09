package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.exception.ReceptionistUserNotFoundException;
import com.LabAppointmentSystem.Lab_Appointment_System.exception.TechnicianUserNotFoundException;
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

    @GetMapping("/technicians/{id}")
    TechnicianUser getUserById(@PathVariable Long id){
        return technicianRepository.findById(id)
                .orElseThrow(()->new TechnicianUserNotFoundException(id));
    }

    @PutMapping("/technicians/{id}")
    TechnicianUser updateTechnicianUser(@RequestBody TechnicianUser newTechnicianUser,@PathVariable Long id){
        return technicianRepository.findById(id)
                .map(technicianUser -> {
                    technicianUser.setName(newTechnicianUser.getName());
                    technicianUser.setEmail(newTechnicianUser.getEmail());
                    technicianUser.setPassword(newTechnicianUser.getPassword());
                    technicianUser.setM_number(newTechnicianUser.getM_number());
                    return technicianRepository.save(technicianUser);
                }).orElseThrow(()->new TechnicianUserNotFoundException(id));
    }

    @DeleteMapping("/technicians/{id}")
    String deleteTechnicianUser(@PathVariable Long id){
        if (!technicianRepository.existsById(id)){
            throw new TechnicianUserNotFoundException(id);
        }
        technicianRepository.deleteById(id);
        return "Technician With id "+id+" has been Deleted Success.";

    }
}
