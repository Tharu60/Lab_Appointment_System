package com.LabAppointmentSystem.Lab_Appointment_System.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class PatientUser {

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

    public String getAddress_l1() {
        return address_l1;
    }

    public void setAddress_l1(String address_l1) {
        this.address_l1 = address_l1;
    }

    public String getAddress_l2() {
        return address_l2;
    }

    public void setAddress_l2(String address_l2) {
        this.address_l2 = address_l2;
    }

    public String getAddress_l3() {
        return address_l3;
    }

    public void setAddress_l3(String address_l3) {
        this.address_l3 = address_l3;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    private String m_number;
    private String address_l1;
    private String address_l2;
    private String address_l3;
    private String gender;
    private byte[] image;

}
