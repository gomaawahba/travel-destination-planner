package com.travel.dto;
import lombok.Data;

@Data
public class DestinationDTO {
    private String country;
    private String capital;
    private String region;
    private Long population;
    private String currency;
    private String flagUrl;
}
