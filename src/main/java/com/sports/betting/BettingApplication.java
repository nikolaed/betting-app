package com.sports.betting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BettingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BettingApplication.class, args);
	}

}
