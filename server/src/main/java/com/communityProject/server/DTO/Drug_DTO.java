package com.communityProject.server.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Drug_DTO {
    private int id;
    private String drugName;

    private double drugPrice;

    private int drugSKU;

    private String generic;

    private int packSize;

    private Blob photo;

}
