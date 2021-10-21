package com.sports.betting.domain;

import io.restassured.http.ContentType;
import org.json.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.with;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItems;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class RestAssuredTest {

    @Test
    public void testForMatch(){
        given().
                when().
             get("http://localhost:5000/api/v1/sports/soccer/matches")
        .then()
             .statusCode(200)
             .body("[0].id", equalTo(91))
             .body("id", hasItems(112, 139));
    }

    @Test
    public void testPostUser(){
        UserDTO user = new UserDTO();

        String name="javauser";

        Random r = new Random();
        int low = 10;
        int high = 200;
        int result = r.nextInt(high-low) + low;
        String username = name+""+String.valueOf(result);


        Random RANDOM = new SecureRandom();

        String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        int length = 8;

        StringBuilder returnValue = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            returnValue.append(AB.charAt(RANDOM.nextInt(AB.length())));
        }

        user.setUsername(username);
        user.setPassword(returnValue.toString());
        user.setRole("ROLE_USER");


        given()
                .body(user)
                .contentType(ContentType.JSON)
                .when()
                .post("http://localhost:5000/register")
                .then()
                .statusCode(200);
    }

}
