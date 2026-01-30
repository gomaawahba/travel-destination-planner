package com.travel.dto;

import com.travel.entity.Role;
import lombok.Data;

@Data
public class UserResponseDTO {
    private Long id;
    private String username;
    private Role role;
}