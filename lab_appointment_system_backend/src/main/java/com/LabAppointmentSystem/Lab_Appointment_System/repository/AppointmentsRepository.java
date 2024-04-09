package com.LabAppointmentSystem.Lab_Appointment_System.repository;

import com.LabAppointmentSystem.Lab_Appointment_System.model.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentsRepository extends JpaRepository<Appointments,Long> {
}
