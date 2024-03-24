package com.LabAppointmentSystem.Lab_Appointment_System.repository;

import com.LabAppointmentSystem.Lab_Appointment_System.model.TechnicianUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechnicianRepository extends JpaRepository<TechnicianUser,Long> {
}
