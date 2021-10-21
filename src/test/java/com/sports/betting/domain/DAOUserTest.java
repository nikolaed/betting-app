package com.sports.betting.domain;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DAOUserTest {

    @Test
    void testUserCreation(){
        DAOUser user = new DAOUser("java67", "dabe234", "ROLE_USER");
        Assert.assertEquals("java67", user.getUsername());
    }

    @Test
    void usernameContainsA(){
        DAOUser user = new DAOUser("java67", "dabe234", "ROLE_USER");
        Assert.assertTrue(user.usernameContainsA());
    }

}