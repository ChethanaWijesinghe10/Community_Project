package com.communityProject.server.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "drug_details")

public class Drugs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "drug_id")
    private int id;

    @Column(name = "drug_name", length = 100, nullable = false)
    private String drugName;

    @Column(name = "drug_price", nullable = false)
    private double drugPrice;

    @Column(name = "drug_SKU", nullable = false)
    private int drugSKU;

    @Column(name = "generic", length = 100, nullable = false)
    private String generic;

    @Column(name = "packSize", length = 100, nullable = false)
    private int packSize;

    @Lob
    @Column(name = "photo")
    private Blob photo;
}
