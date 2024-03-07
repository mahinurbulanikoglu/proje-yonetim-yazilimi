package com.vtys.ProjeOdevi.Service;

import com.vtys.ProjeOdevi.Model.Task;
import com.vtys.ProjeOdevi.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        List<Task> tasks = new ArrayList<>();
        for (Task task: taskRepository.findAll()) {
            Date dueDate = new Date(task.getDueDate());
            Date currentDate = new Date(System.currentTimeMillis());

            long timeDiff = currentDate.getTime() - dueDate.getTime();

            long daysDiff = timeDiff / (1000 * 60 * 60 * 24);
            if (daysDiff > 0) {
                task.setDelayAmount(String.valueOf(daysDiff));
            } else {
                task.setDelayAmount("-");
            }
            tasks.add(task);
        }


        return tasks;
    }

    public void saveOrUpdateTask(Task task) {
        taskRepository.save(task);
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}
