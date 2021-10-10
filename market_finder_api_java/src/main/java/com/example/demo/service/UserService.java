package com.example.demo.service;
import com.example.demo.dao.UserDAO;
import com.example.demo.entity.User;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public User getUserByid(int id) {
        // If not found, throw error
        return userDAO.findById(id).get();
    }

}