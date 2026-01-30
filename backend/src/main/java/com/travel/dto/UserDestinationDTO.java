package com.travel.dto;
import lombok.Data;

@Data
public class UserDestinationDTO {
    private Long userId;
    private Long destinationId;
    private boolean wantToVisit;
}
