package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.Task;
import com.example.demo.Entity.User;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    // Assign task (Admin)
    public Task assignTask(Task task) {
        return taskRepository.save(task);
    }

    // OLD METHOD (keep if used somewhere else, safe to remove later)
    public List<Task> getTasksForUser(Long userId) {
        return taskRepository.findByAssigneeId(userId);
    }

    // 🔥 NEW METHOD (FINAL – uses logged-in user)
    public List<Task> getTasksForUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return taskRepository.findByAssigneeId(user.getId());
    }

    // Update task status (Member)
    public Task updateTaskStatus(Long taskId, String status) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setStatus(status);
        return taskRepository.save(task);
    }
}