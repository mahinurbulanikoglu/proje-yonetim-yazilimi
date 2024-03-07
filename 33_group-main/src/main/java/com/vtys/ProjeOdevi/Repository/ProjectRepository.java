package com.vtys.ProjeOdevi.Repository;

import com.vtys.ProjeOdevi.Model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
