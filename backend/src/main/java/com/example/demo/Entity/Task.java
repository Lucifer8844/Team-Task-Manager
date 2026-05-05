package com.example.demo.Entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Task title is required")
    private String title;
    @NotBlank(message = "Status is required")
    private String status; // TODO, IN_PROGRESS, DONE
    private String dueDate;

    // Proper Relationship: Many tasks belong to one Project
    @ManyToOne
    @JoinColumn(name = "project_id")
    @JsonIgnoreProperties("tasks") // Prevents infinite loops
    private Project project;

    // Proper Relationship: Many tasks can be assigned to one User
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User assignee;
}