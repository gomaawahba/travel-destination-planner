package com.travel.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class UserDestination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "destination_id")
    private Destination destination;
    private boolean wantToVisit = false;
}
