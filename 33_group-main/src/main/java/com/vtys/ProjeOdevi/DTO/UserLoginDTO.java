package com.vtys.ProjeOdevi.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserLoginDTO {
    @JsonProperty
    private String username;

    @JsonProperty
    private String password;

    public UserLoginDTO() {
    }

    public UserLoginDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
