package com.sports.betting.service;

import com.sports.betting.domain.SoccerStorage;
import com.sports.betting.exception.SportsException;

import java.util.List;

public interface SportService {

    public SoccerStorage getMatchById(Long id, String sport) throws SportsException;

    public List<SoccerStorage> getMatchesByIds(List<Long> ids, String sport) throws SportsException;

    public List<SoccerStorage> findMatchByLeagueAndDate(Long league, String date, String sport) throws SportsException;

    public List<SoccerStorage> findMatchesByLeagueAndDateRange(Long league, String startDate, String endDate, String sport) throws SportsException;

    public List<SoccerStorage> findMatchesByDate(String date, String sport) throws SportsException;

    public List<SoccerStorage> findAllMatches() throws SportsException;

    List<SoccerStorage> findLiveMatchesByStatus(String status, String sport) throws SportsException;

    List<SoccerStorage> findLiveMatchesByStatusAndLeague(String status, Long league, String sport) throws SportsException;

    void saveSoccerMatch(SoccerStorage soccerStorage) throws SportsException;

    void updateSoccerMatch(SoccerStorage soccerStorage) throws SportsException;

    void deleteSoccerMatch(Long id) throws SportsException;

}
