package com.LabAppointmentSystem.Lab_Appointment_System.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Report {
    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Id
    @GeneratedValue
    private Long Id;
    private byte[] image;
}
