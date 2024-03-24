package com.LabAppointmentSystem.Lab_Appointment_System.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class ReceptionistUser {

    @Id
    @GeneratedValue
    private Long Id;
    private String email;
    private String name;
    private String password;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getM_number() {
        return m_number;
    }

    public void setM_number(String m_number) {
        this.m_number = m_number;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    private String m_number;
    private byte[] image;
}
