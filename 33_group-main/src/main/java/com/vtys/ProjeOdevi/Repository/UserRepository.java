package com.vtys.ProjeOdevi.Repository;

import com.vtys.ProjeOdevi.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
