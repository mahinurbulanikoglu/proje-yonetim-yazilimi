package com.vtys.ProjeOdevi.Controller;

import com.vtys.ProjeOdevi.DTO.UserLoginDTO;
import com.vtys.ProjeOdevi.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody UserLoginDTO userLoginDTO) {
        boolean result = userService.login(userLoginDTO.getUsername(), userLoginDTO.getPassword());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/register")
    public ResponseEntity<Boolean> register(@RequestBody UserLoginDTO userLoginDTO) {
        boolean result = userService.register(userLoginDTO.getUsername(), userLoginDTO.getPassword());
        return ResponseEntity.ok(result);
    }
}
