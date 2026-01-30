package com.travel.entity;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String country;
    private String capital;
    private String region;
    private Long population;
    private String currency;
    private String flagUrl;
    private boolean approved = false;
}

