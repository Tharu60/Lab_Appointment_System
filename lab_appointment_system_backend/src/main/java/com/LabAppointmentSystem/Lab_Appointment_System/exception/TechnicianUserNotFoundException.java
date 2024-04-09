package com.LabAppointmentSystem.Lab_Appointment_System.exception;

public class TechnicianUserNotFoundException extends RuntimeException{
    public TechnicianUserNotFoundException(Long id){
        super("Could not found the Admin with id "+ id);
    }
}
