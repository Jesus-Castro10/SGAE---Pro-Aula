package co.unicolombo.sgae.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.unicolombo.sgae.business.model.User;
import co.unicolombo.sgae.business.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api/saludo")
public class AppController {

    private final UserService userService;

    @GetMapping
    public User getMethodName() {
        User user = new User();
        user.setUsername("jesusdcr");
        user.setPassword("12345");
        return user;
    }

    @GetMapping("/list")
    public List<User> list() {
        return userService.findAll();
    }

}
