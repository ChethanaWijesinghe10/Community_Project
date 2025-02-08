package com.communityProject.server.DTO;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Prescription_DTO {
    private String patientName;

    private String doctorName;

    private String prescriptionDetails;
    private String patientAddress;
    private int patientPhone;
    private String fileUrl;
    private Date createdDate;
}
