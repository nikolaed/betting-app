package com.sports.betting.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/hello")
    public String firstPage() {
        return "Hello World";
    }

    @PreAuthorize("hasRole('USER')")
    @RequestMapping(value = "/user")
    public String user() { return "Hello User"; }


}
