package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.exception.PatientUserNotFoundException;
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

    @GetMapping("/patients/{id}")
    PatientUser getUserById(@PathVariable Long id){
        return patientUserRepository.findById(id)
                .orElseThrow(()->new PatientUserNotFoundException(id));
    }

    @PutMapping("/patients/{id}")
    PatientUser updatePatientUser(@RequestBody PatientUser newPatientUser,@PathVariable Long id){
        return patientUserRepository.findById(id)
                .map(patientUser -> {
                    patientUser.setName(newPatientUser.getName());
                    patientUser.setEmail(newPatientUser.getEmail());
                    patientUser.setPassword(newPatientUser.getPassword());
                    patientUser.setM_number(newPatientUser.getM_number());
                    patientUser.setAddress_l1(newPatientUser.getAddress_l1());
                    patientUser.setAddress_l2(newPatientUser.getAddress_l2());
                    patientUser.setAddress_l3(newPatientUser.getAddress_l3());
                    patientUser.setGender(newPatientUser.getGender());
                    patientUser.setImage(newPatientUser.getImage());
                    return patientUserRepository.save(patientUser);
                }).orElseThrow(()->new PatientUserNotFoundException(id));
    }

    @DeleteMapping("/patients/{id}")
    String deletePatientUser(@PathVariable Long id){
        if (!patientUserRepository.existsById(id)){
            throw new PatientUserNotFoundException(id);
        }
        patientUserRepository.deleteById(id);
        return "Patient With id "+id+" has been Deleted Success.";
    }

}
