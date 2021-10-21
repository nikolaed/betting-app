package com.sports.betting.domain;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions.*;

class SoccerStorageTest {

    @Test
    void testMatchCreation(){
        SoccerStorage match = new SoccerStorage(713L,"2021-03-12",22L,51L,"Blackburn",0,null,"LIVE","15:00:00",210L,"WBA",0,null);
        Assert.assertEquals(new Long(713), match.getId());
    }

    @Test
    void matchHasEvents(){
        SoccerStorage match = new SoccerStorage(713L,"2021-03-12",22L,51L,"Blackburn",0,null,"LIVE","15:00:00",210L,"WBA",0,null);
        Assert.assertFalse(match.hasEvents());
    }

    @Test
    void setLocalName(){
        SoccerStorage match = new SoccerStorage(713L,"2021-03-12",22L,51L,"Blackburn",0,null,"LIVE","15:00:00",210L,"WBA",0,null);
        match.setLocalTeamName("Fulham");
        Assert.assertEquals("Fulham", match.getLocalTeamName());
    }

    @Test
    void testSetLocalTeamNameWithNull(){
        SoccerStorage match = new SoccerStorage(713L,"2021-03-12",22L,51L,"Blackburn",0,null,"LIVE","15:00:00",210L,"WBA",0,null);
        match.setLocalTeamName(null);
        Assert.assertNotNull(match.getLocalTeamName());
    }







}