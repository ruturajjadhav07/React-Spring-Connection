package com.ruturaj.SpringReactConnect;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @CrossOrigin(origins="http://localhost:3000/")
    @GetMapping("/hello")
    public String hello() {
        return "Spring: Hello React";
    }
}
