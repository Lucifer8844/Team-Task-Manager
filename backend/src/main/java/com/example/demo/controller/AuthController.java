package com.example.demo.controller;


import com.example.demo.config.JwtUtil;
import com.example.demo.Entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtils;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // Default role if not provided, or you can force it in the logic
        if (user.getRole() == null) user.setRole("ROLE_MEMBER");
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            String token = jwtUtils.generateToken(user.getUsername(), user.getRole());
            return Map.of("token", token, "role", existingUser.getRole());
        }
        throw new RuntimeException("Invalid credentials");
    }
}