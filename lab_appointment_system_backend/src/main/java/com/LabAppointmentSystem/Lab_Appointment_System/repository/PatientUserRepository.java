package com.LabAppointmentSystem.Lab_Appointment_System.repository;

import com.LabAppointmentSystem.Lab_Appointment_System.model.PatientUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientUserRepository extends JpaRepository<PatientUser,Long> {
}
