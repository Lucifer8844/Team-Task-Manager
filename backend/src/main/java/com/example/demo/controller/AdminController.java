package com.example.demo.controller;
import java.util.Map;
import com.example.demo.Entity.Task;
import com.example.demo.Entity.Project;
import com.example.demo.Entity.User;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.Entity.Project;
import com.example.demo.Entity.Task;
import com.example.demo.Entity.User;
import com.example.demo.service.ProjectService;
import com.example.demo.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final ProjectService projectService;
    private final TaskService taskService;
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskRepository taskRepository;

    public AdminController(ProjectService projectService, TaskService taskService) {
        this.projectService = projectService;
        this.taskService = taskService;
    }

    @PostMapping("/projects")
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Map<String, Object> payload) {

        Long projectId = Long.valueOf(payload.get("projectId").toString());
        Long userId = Long.valueOf(payload.get("userId").toString());

        Project project = projectRepository.findById(projectId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();

        Task task = new Task();
        task.setTitle((String) payload.get("title"));
        task.setStatus((String) payload.get("status"));
        task.setDueDate((String) payload.get("dueDate"));
        task.setProject(project);
        task.setAssignee(user);

        return taskRepository.save(task);
    }
}
