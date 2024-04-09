package com.LabAppointmentSystem.Lab_Appointment_System.exception;



public class ReceptionistUserNotFoundException extends RuntimeException {
    public ReceptionistUserNotFoundException(Long id){
        super("Could not found the Admin with id "+ id);
    }
}
