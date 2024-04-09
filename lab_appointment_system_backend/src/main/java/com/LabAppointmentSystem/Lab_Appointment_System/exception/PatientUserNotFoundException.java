package com.LabAppointmentSystem.Lab_Appointment_System.exception;

public class PatientUserNotFoundException extends RuntimeException {
    public PatientUserNotFoundException(Long id){
        super("Could not found the Admin with id "+ id);
    }
}
