package com.sports.betting.controller;

import com.sports.betting.dao.SportDao;
import com.sports.betting.domain.SoccerStorage;
import com.sports.betting.exception.SportsException;
import com.sports.betting.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value="/api/v1/sports")
public class SportController {


    @Autowired
    private SportService sportService;

//    //getMatchById
//    @RequestMapping(value="/soccer/match", method = RequestMethod.GET)
//    public SoccerStorage getMatchById(@RequestParam("id") Long id) throws SportsException {
//        //SoccerStorage soccer = sportDao.getMatchById(16774017L, "soccer");
//        return sportService.getMatchById(id, "soccer");
//    }
//    //soccer/match?id=16475386


    //getMatchById
    @RequestMapping(value="/soccer/match/{id}", method = RequestMethod.GET)
    public SoccerStorage getMatchById(@PathVariable("id") Long id) throws SportsException {
        //SoccerStorage soccer = sportDao.getMatchById(16774017L, "soccer");
        return sportService.getMatchById(id, "soccer");
    }
    //soccer/match/16475386


//    //findMatchesByLeagueAndDateRange
//    @RequestMapping(value="/soccer/leagueDate", method = RequestMethod.GET)
//    public List<SoccerStorage> findMatchesByLeagueAndDateRange(@RequestParam("leagueId") Long leagueId, @RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate) throws SportsException {
//        //return sportDao.getMatchesByIds(Arrays.asList(16774017L), "soccer");
//        return sportService.findMatchesByLeagueAndDateRange(leagueId,startDate,endDate, "soccer");
//    }
//    //soccer/leagueDate?leagueId=501&startDate=2020-12-19&endDate=2020-12-20

    //findMatchesByLeagueAndDateRange
    @RequestMapping(value="/soccer/leagueDate/{lid}/{sD}/{eD}", method = RequestMethod.GET)
    public List<SoccerStorage> findMatchesByLeagueAndDateRange(@PathVariable("lid") Long leagueId, @PathVariable("sD") String startDate, @PathVariable("eD") String endDate) throws SportsException {
        //return sportDao.getMatchesByIds(Arrays.asList(16774017L), "soccer");
        return sportService.findMatchesByLeagueAndDateRange(leagueId,startDate,endDate, "soccer");
    }
    //soccer/leagueDate/501/2020-12-19/2020-12-20

    //findMatchesByDate
    @RequestMapping(value = "/soccer/matchesByDate/{d}", method = RequestMethod.GET)
    public List<SoccerStorage> findMatchesByDate(@PathVariable("d") String date) throws SportsException {
        return sportService.findMatchesByDate(date, "soccer");
    }
    //soccer/matchesByDate/2021-01-23

    //findAllMatches
    @RequestMapping(value = "/soccer/matches", method = RequestMethod.GET)
    public List<SoccerStorage> findAllMatches() throws SportsException {
        return sportService.findAllMatches();
    }


//    //findLiveMatchesByStatus
//    @RequestMapping(value="/soccer/status", method = RequestMethod.GET)
//    public List<SoccerStorage> findLiveMatchesByStatus(@RequestParam("status") String status) throws SportsException {
//        //return sportDao.findMatchByLeagueAndDate(271L, "2020-12-07", "soccer");
//        return sportService.findLiveMatchesByStatus(status, "soccer");
//    }
//    //soccer/status?status=LIVE


    //findLiveMatchesByStatus
    @RequestMapping(value="/soccer/status/{status}", method = RequestMethod.GET)
    public List<SoccerStorage> findLiveMatchesByStatus(@PathVariable("status") String status) throws SportsException {
        //return sportDao.findMatchByLeagueAndDate(271L, "2020-12-07", "soccer");
        return sportService.findLiveMatchesByStatus(status, "soccer");
    }
    //soccer/status/LIVE



//    //findLiveMatchesByStatusAndLeague
//    @RequestMapping(value="/soccer/statusLeague", method = RequestMethod.GET)
//    public List<SoccerStorage> findLiveMatchesByStatusAndLeague(@RequestParam("status") String status, @RequestParam("leagueId") Long leagueId) throws SportsException {
//        return sportService.findLiveMatchesByStatusAndLeague(status, leagueId, "soccer");
//    }
//    //soccer/statusLeague?status=LIVE&leagueId=501


    //findLiveMatchesByStatusAndLeague
    @RequestMapping(value="/soccer/statusLeague/{status}/{lid}", method = RequestMethod.GET)
    public List<SoccerStorage> findLiveMatchesByStatusAndLeague(@PathVariable("status") String status, @PathVariable("lid") Long leagueId) throws SportsException {
        return sportService.findLiveMatchesByStatusAndLeague(status, leagueId, "soccer");
    }
    //soccer/statusLeague/LIVE/501


    @RequestMapping(value = "/soccer/matches", method = RequestMethod.POST)
    public void saveSoccerMatch(@RequestBody SoccerStorage soccerStorage) throws SportsException {
        sportService.saveSoccerMatch(soccerStorage);
    }
    //soccer/matches

    @RequestMapping(value = "/soccer/matches", method = RequestMethod.PUT)
    public void updateSoccerMatch(@RequestBody SoccerStorage soccerStorage) throws SportsException{
        sportService.updateSoccerMatch(soccerStorage);
    }
    //soccer/matches

    @RequestMapping(value = "/soccer/matches/{id}", method = RequestMethod.DELETE)
    public void deleteSoccerMatch(@PathVariable("id") Long id) throws SportsException{
        sportService.deleteSoccerMatch(id);
    }
    //soccer/matches/16475390



}
