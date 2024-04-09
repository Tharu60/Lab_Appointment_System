package com.LabAppointmentSystem.Lab_Appointment_System.controller;

import com.LabAppointmentSystem.Lab_Appointment_System.exception.TechnicianUserNotFoundException;
import com.LabAppointmentSystem.Lab_Appointment_System.exception.TestNotFoundException;
import com.LabAppointmentSystem.Lab_Appointment_System.model.Test;
import com.LabAppointmentSystem.Lab_Appointment_System.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TestController {

    @Autowired
    private TestRepository testRepository;

    @PostMapping("/test/addTest")
    Test newUser(@RequestBody Test newUser){
        return testRepository.save(newUser);
    }

    @GetMapping("/test")
    List<Test> getAllTest() {
        return testRepository.findAll();
    }

    @GetMapping("/tests/{id}")
    Test getUserById(@PathVariable Long id){
        return testRepository.findById(id)
                .orElseThrow(()->new TestNotFoundException(id));
    }

    @PutMapping("/tests/{id}")
    Test updateTest(@RequestBody Test newTest,@PathVariable Long id){
        return testRepository.findById(id)
                .map(test -> {
                    test.setName(newTest.getName());
                    test.setDescription(newTest.getDescription());
                    test.setPrice(newTest.getPrice());
                    return testRepository.save(test);
                }).orElseThrow(()->new TestNotFoundException(id));
    }

    @DeleteMapping("/tests/{id}")
    String deleteTest(@PathVariable Long id){
        if (!testRepository.existsById(id)){
            throw new TestNotFoundException(id);
        }
        testRepository.deleteById(id);
        return "Test With id "+id+" has been Deleted Success.";
    }
}
