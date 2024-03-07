package com.vtys.ProjeOdevi.Repository;

import com.vtys.ProjeOdevi.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
