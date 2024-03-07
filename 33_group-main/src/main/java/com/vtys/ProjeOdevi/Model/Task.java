package com.vtys.ProjeOdevi.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long taskId;

    private String taskName;
    private String startDate;
    private String dueDate;
    private String delayAmount;
    private String status;

    @ManyToOne
    @JoinColumn(name = "projectID")
    @JsonIgnoreProperties("tasks")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "employeeID")
    @JsonIgnoreProperties("tasks")
    private Employee assignedTo;

    public Task() {
    }

    public Task(Long taskId, String taskName, String startDate, String dueDate, String delayAmount, String status, Project project, Employee assignedTo) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.delayAmount = delayAmount;
        this.status = status;
        this.project = project;
        this.assignedTo = assignedTo;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getDelayAmount() {
        return delayAmount;
    }

    public void setDelayAmount(String delayAmount) {
        this.delayAmount = delayAmount;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Employee getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(Employee assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
