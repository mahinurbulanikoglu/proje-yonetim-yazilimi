package com.vtys.ProjeOdevi.Repository;

import com.vtys.ProjeOdevi.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
