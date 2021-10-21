package com.sports.betting.service;

import com.sports.betting.dao.SportDao;
import com.sports.betting.domain.SoccerStorage;
import com.sports.betting.exception.SportsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportServiceImpl implements SportService {

    @Autowired
    private SportDao sportDao;

    @Override
    public SoccerStorage getMatchById(Long id, String sport) throws SportsException {
        return sportDao.getMatchById(id, sport);
    }

    @Override
    public List<SoccerStorage> getMatchesByIds(List<Long> ids, String sport) throws SportsException {
        return sportDao.getMatchesByIds(ids, sport);
    }

    @Override
    public List<SoccerStorage> findMatchByLeagueAndDate(Long league, String date, String sport) throws SportsException {
        return sportDao.findMatchByLeagueAndDate(league, date, sport);
    }

    @Override
    public List<SoccerStorage> findMatchesByLeagueAndDateRange(Long league, String startDate, String endDate, String sport) throws SportsException {
        return sportDao.findMatchesByLeagueAndDateRange(league, startDate, endDate, sport);
    }

    @Override
    public List<SoccerStorage> findMatchesByDate(String date, String sport) throws SportsException {
        return sportDao.findMatchesByDate(date, sport);
    }

    @Override
    public List<SoccerStorage> findAllMatches() throws SportsException {
        return sportDao.findAllMatches();
    }

    @Override
    public List<SoccerStorage> findLiveMatchesByStatus(String status, String sport) throws SportsException {
        return sportDao.findLiveMatchesByStatus(status, sport);
    }

    @Override
    public List<SoccerStorage> findLiveMatchesByStatusAndLeague(String status, Long league, String sport) throws SportsException {
        return sportDao.findLiveMatchesByStatusAndLeague(status, league, sport);
    }

    @Override
    public void saveSoccerMatch(SoccerStorage soccerStorage) throws SportsException {
        sportDao.saveSoccerMatch(soccerStorage);
    }

    @Override
    public void updateSoccerMatch(SoccerStorage soccerStorage) throws SportsException{
        sportDao.updateSoccerMatch(soccerStorage);
    }


    @Override
    public void deleteSoccerMatch(Long id) throws SportsException{
        sportDao.deleteSoccerMatch(id);
    }

}
