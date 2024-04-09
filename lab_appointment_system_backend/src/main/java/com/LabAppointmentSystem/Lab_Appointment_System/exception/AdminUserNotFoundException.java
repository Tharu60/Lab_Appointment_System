package com.LabAppointmentSystem.Lab_Appointment_System.exception;

public class AdminUserNotFoundException extends RuntimeException{
    public AdminUserNotFoundException(Long id){
        super("Could not found the Admin with id "+ id);
    }
}
