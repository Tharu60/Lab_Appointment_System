package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.exception.ReceptionistUserNotFoundException;
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

    @GetMapping("/receptionists/{id}")
    ReceptionistUser getUserById(@PathVariable Long id) {
        return receptionistUserRepository.findById(id)
                .orElseThrow(() -> new ReceptionistUserNotFoundException(id));
    }

    @PutMapping("/receptionists/{id}")
    ReceptionistUser updateReceptionistUser(@RequestBody ReceptionistUser newReceptionistUser, @PathVariable Long id) {
        return receptionistUserRepository.findById(id)
                .map(receptionistUser -> {
                    receptionistUser.setName(newReceptionistUser.getName());
                    receptionistUser.setEmail(newReceptionistUser.getEmail());
                    receptionistUser.setPassword(newReceptionistUser.getPassword());
                    receptionistUser.setM_number(newReceptionistUser.getM_number());
                    return receptionistUserRepository.save(receptionistUser);
                }).orElseThrow(() -> new ReceptionistUserNotFoundException(id));
    }

    @DeleteMapping("/receptionists/{id}")
    String deleteReceptionistUser(@PathVariable Long id){
        if (!receptionistUserRepository.existsById(id)){
            throw new ReceptionistUserNotFoundException(id);
        }
        receptionistUserRepository.deleteById(id);
        return "Receptionist With id "+id+" has been Deleted Success.";
    }
}