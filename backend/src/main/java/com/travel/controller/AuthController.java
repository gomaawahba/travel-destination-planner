package com.travel.controller;

import com.travel.dto.UserDTO;
import com.travel.entity.Role;
import com.travel.entity.User;
import com.travel.repository.UserRepository;
import com.travel.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO dto) {

        if (userRepo.findByUsername(dto.getUsername()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("error", "Username already exists"));
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole(Role.USER);
        userRepo.save(user);

        return ResponseEntity.ok(
                Map.of("message", "User registered successfully")
        );
    }

    @PostMapping("/register-admin")
    public ResponseEntity<?> registerAdmin(@RequestBody UserDTO dto) {

        if (userRepo.findByUsername(dto.getUsername()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("error", "Username already exists"));
        }

        User admin = new User();
        admin.setUsername(dto.getUsername());
        admin.setPassword(passwordEncoder.encode(dto.getPassword()));
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);

        return ResponseEntity.ok(
                Map.of("message", "Admin registered successfully")
        );
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDTO dto) {
        try {
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword())
            );

            User user = userRepo.findByUsername(dto.getUsername()).orElseThrow();

            return jwtUtil.generateToken(user.getId(), user.getUsername(), user.getRole().name());

        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid Credentials");
        }
    }
}
