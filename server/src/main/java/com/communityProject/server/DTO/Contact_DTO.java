package com.communityProject.server.DTO;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Contact_DTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String message;
}
