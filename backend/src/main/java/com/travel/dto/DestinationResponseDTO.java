package com.travel.dto;

import lombok.Data;

@Data
public class DestinationResponseDTO {
    private Long id;
    private String country;
    private String capital;
    private String region;
    private Long population;
    private String currency;
    private String flagUrl;
    private boolean approved;
}
