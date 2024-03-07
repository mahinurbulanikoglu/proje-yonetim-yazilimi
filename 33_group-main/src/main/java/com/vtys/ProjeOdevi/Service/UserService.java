package com.vtys.ProjeOdevi.Service;

import com.vtys.ProjeOdevi.Model.User;
import com.vtys.ProjeOdevi.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }

    public boolean register(String username, String password) {
        if (userRepository.findByUsername(username) != null) {
            return false;
        }
        userRepository.save(new User(username, password));
        return true;
    }
}
