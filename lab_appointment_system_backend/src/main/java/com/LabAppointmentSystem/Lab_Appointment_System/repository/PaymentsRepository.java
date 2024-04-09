package com.LabAppointmentSystem.Lab_Appointment_System.repository;

import com.LabAppointmentSystem.Lab_Appointment_System.model.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentsRepository extends JpaRepository<Payments,Long> {
}
