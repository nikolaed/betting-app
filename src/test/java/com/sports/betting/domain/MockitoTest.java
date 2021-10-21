package com.sports.betting.domain;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sports.betting.dao.SportDao;
import com.sports.betting.dao.UserDao;
import com.sports.betting.exception.SportsException;
import com.sports.betting.service.JwtUserDetailsService;
import com.sports.betting.service.SportService;
//import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

//import static io.restassured.RestAssured.when;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
public class MockitoTest {

   private MockMvc mockMvc;

   @Autowired
   private WebApplicationContext context;

   @Autowired
   private SportService sportService;

   @MockBean
   private JwtUserDetailsService userService;

   @MockBean
   private DAOUser userRepository;

   @MockBean
   private SportDao sportRepository;

   ObjectMapper om = new ObjectMapper();

   @Before
   public void setup(){
       mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
   }


   @Test
   public void addUserTest() throws Exception {
        UserDTO user = new UserDTO();
        user.setUsername("java88");
        user.setPassword("dada789");
        user.setRole("ROLE_USER");
        DAOUser userFin = new DAOUser("java88", "dada789", "ROLE_USER");
        Mockito.when(userService.save(user)).thenReturn(userFin);
        Assert.assertEquals(userFin, userService.save(user));
   }

    @Test
    public void getMatchesTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/v1/sports/soccer/matches").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
        Assert.assertEquals(200, result.getResponse().getStatus());
    }

    @Test
    public void deleteMatchTest() throws SportsException {
       SoccerStorage match = new SoccerStorage(713L,"2021-03-12",22L,51L,"Blackburn",0,null,"LIVE","15:00:00",210L,"WBA",0,null);
       sportService.deleteSoccerMatch(match.getId());
       verify(sportRepository, times(1)).deleteSoccerMatch(match.getId());
    }

    @Test
    public void getMatchesByStatusTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/v1/sports/soccer/status/{status}","LIVE")).andExpect(status().isOk()).andReturn();
        Assert.assertEquals(200, result.getResponse().getStatus());
    }




}
