package com.LabAppointmentSystem.Lab_Appointment_System.repository;

import com.LabAppointmentSystem.Lab_Appointment_System.model.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminUserRepository extends JpaRepository<AdminUser,Long> {
}
