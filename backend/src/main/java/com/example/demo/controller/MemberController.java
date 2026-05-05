package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import com.example.demo.Entity.Task;
import com.example.demo.service.TaskService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/member")
public class MemberController {

    private final TaskService taskService;

    public MemberController(TaskService taskService) {
        this.taskService = taskService;
    }

    // 🔥 FIXED: no userId needed
    @GetMapping("/tasks")
    public List<Task> getMyTasks(Authentication authentication) {
        String username = authentication.getName(); // from JWT
        return taskService.getTasksForUsername(username);
    }

    @PatchMapping("/tasks/{taskId}")
    public Task updateStatus(@PathVariable Long taskId, @RequestParam String status) {
        return taskService.updateTaskStatus(taskId, status);
    }
}