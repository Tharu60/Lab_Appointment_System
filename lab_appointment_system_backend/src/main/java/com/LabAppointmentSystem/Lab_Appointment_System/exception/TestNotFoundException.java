package com.LabAppointmentSystem.Lab_Appointment_System.exception;

public class TestNotFoundException extends RuntimeException{
    public TestNotFoundException(Long id){
        super("Could not found the Admin with id "+ id);
    }
}
