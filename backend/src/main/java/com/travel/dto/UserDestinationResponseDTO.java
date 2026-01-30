package com.travel.dto;

import lombok.Data;

@Data
public class UserDestinationResponseDTO {
    private Long id;
    private UserResponseDTO user;
    private DestinationResponseDTO destination;
    private boolean wantToVisit;
}
