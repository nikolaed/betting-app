package com.sports.betting.dao;


import com.sports.betting.domain.SoccerInterface;
import com.sports.betting.domain.SoccerStorage;
import com.sports.betting.exception.SportsException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class SportDaoImpl implements SportDao {

    private static final Logger LOGGER = LoggerFactory.getLogger(SportDaoImpl.class);

    @Autowired
    private SoccerInterface soccerInterface;


    @Override
    public SoccerStorage getMatchById(Long id, String sport) throws SportsException {
        Optional<SoccerStorage> ss  = soccerInterface.findById(id);
        if (ss.get() == null) {
            throw new SportsException(SportsException.Culprit.NOT_FOUND, "SoccerMatch with id: "+id+" does not exist");
        } else {
            return ss.get();
        }
    }

    @Override
    public List<SoccerStorage> getMatchesByIds(List<Long> ids, String sport) throws SportsException{
//        String sql = "SELECT * FROM soccer_match WHERE id IN (:ids)";
//        SqlParameterSource namedParameters = new MapSqlParameterSource("ids", ids);
//
//        List<SoccerStorage> matches = new ArrayList<>();
        List<SoccerStorage> matches = soccerInterface.findByIdIn(ids);
        return matches;


    }

    @Override
    public List<SoccerStorage> findMatchByLeagueAndDate(Long league, String date, String sport) throws SportsException {
//        String sql = "SELECT * FROM soccer_match WHERE lid = :leagueId AND d = :date";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("leagueId", league);
//        parameters.addValue("date", date);

        List<SoccerStorage> matches = soccerInterface.findByLidAndD(league,date);

        return matches;



    }

    @Override
    public List<SoccerStorage> findMatchesByLeagueAndDateRange(Long league, String startDate, String endDate, String sport) throws SportsException {
//        String sql = "SELECT * FROM soccer_match WHERE lid = :leagueId AND (d BETWEEN :stDate AND :eDate)";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("leagueId", league);
//        parameters.addValue("stDate", startDate);
//        parameters.addValue("eDate", endDate);



        List<SoccerStorage> matches = soccerInterface.findByLidAndDBetween(league,startDate,endDate);

        return matches;


    }

    @Override
    public List<SoccerStorage> findMatchesByDate(String date, String sport) throws SportsException {
//        String sql = "SELECT * FROM soccer_match WHERE d = :date";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("date", date);

        List<SoccerStorage> matches = soccerInterface.findByD(date);

        return matches;

    }

    @Override
    public List<SoccerStorage> findAllMatches() throws SportsException {
//        String sql = "SELECT * FROM soccer_match";

        List<SoccerStorage> matches = new ArrayList<>();
        soccerInterface.findAll().forEach(matches::add);

        return matches;
    }

    @Override
    public List<SoccerStorage> findLiveMatchesByStatus(String status, String sport) throws SportsException {
//        String sql = "SELECT * FROM soccer_match WHERE s = :status";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("status", status);

        List<SoccerStorage> matches = soccerInterface.findByS(status);

        return matches;



    }


    @Override
    public List<SoccerStorage> findLiveMatchesByStatusAndLeague(String status, Long leagueId, String sport) throws SportsException {
//       String sql = "SELECT * FROM soccer_match WHERE s = :status AND lid = :leagueId";
//       MapSqlParameterSource parameters = new MapSqlParameterSource();
//       parameters.addValue("status", status);
//       parameters.addValue("leagueId", leagueId);

       List<SoccerStorage> matches = soccerInterface.findBySAndLid(status,leagueId);

       return matches;

    }

    @Override
    public void saveSoccerMatch(SoccerStorage soccerStorage) throws SportsException {
//        String sql = "INSERT INTO soccer_match (id, d, lid, ltid, ltn, lts, m, s, t, vtid, vtn, vts, e) VALUES " +
//                "(:id, :d, :lid, :ltid, :ltn, :lts, :m, :s, :t, :vtid, :vtn, :vts, :e)";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("id", soccerStorage.getId());
//        parameters.addValue("d", soccerStorage.getDate());
//        parameters.addValue("lid", soccerStorage.getLeague());
//        parameters.addValue("ltid", soccerStorage.getLocalTeamId());
//        parameters.addValue("ltn", soccerStorage.getLocalTeamName());
//        parameters.addValue("lts", soccerStorage.getLocalTeamScore());
//        parameters.addValue("m", soccerStorage.getMinute());
//        parameters.addValue("s", soccerStorage.getStatus());
//        parameters.addValue("t", soccerStorage.getTime());
//        parameters.addValue("vtid", soccerStorage.getVisitorTeamId());
//        parameters.addValue("vtn", soccerStorage.getVisitorTeamName());
//        parameters.addValue("vts", soccerStorage.getVisitorTeamScore());
//        parameters.addValue("e", soccerStorage.getEvents());
        SoccerStorage match = new SoccerStorage();
        match.setId(soccerStorage.getId());
        match.setDate(soccerStorage.getDate());
        match.setLeague(soccerStorage.getLeague());
        match.setLocalTeamId(soccerStorage.getLocalTeamId());
        match.setLocalTeamName(soccerStorage.getLocalTeamName());
        match.setLocalTeamScore(soccerStorage.getLocalTeamScore());
        match.setMinute(soccerStorage.getMinute());
        match.setStatus(soccerStorage.getStatus());
        match.setTime(soccerStorage.getTime());
        match.setVisitorTeamId(soccerStorage.getVisitorTeamId());
        match.setVisitorTeamName(soccerStorage.getVisitorTeamName());
        match.setVisitorTeamScore(soccerStorage.getVisitorTeamScore());
        match.setEvents(soccerStorage.getEvents());
        try{
//            namedParameterJdbcTemplate.update(sql, parameters);
            soccerInterface.save(match);
        }catch (Exception e){
            throw new SportsException(SportsException.Culprit.INTERNAL_ERROR, "SoccerMatch Insert with id: "+soccerStorage.getId()+" failed");
        }


    }

    @Override
    public void updateSoccerMatch(SoccerStorage soccerStorage) throws SportsException {
//        String sql = "UPDATE soccer_match SET d=:d, lid=:lid, ltid=:ltid, ltn=:ltn, lts=:lts, m=:m, s=:s, t=:t, " +
//                "vtid=:vtid, vtn=:vtn, vts=:vts, e=:e WHERE id=:id";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("id", soccerStorage.getId());
//        parameters.addValue("d", soccerStorage.getDate());
//        parameters.addValue("lid", soccerStorage.getLeague());
//        parameters.addValue("ltid", soccerStorage.getLocalTeamId());
//        parameters.addValue("ltn", soccerStorage.getLocalTeamName());
//        parameters.addValue("lts", soccerStorage.getLocalTeamScore());
//        parameters.addValue("m", soccerStorage.getMinute());
//        parameters.addValue("s", soccerStorage.getStatus());
//        parameters.addValue("t", soccerStorage.getTime());
//        parameters.addValue("vtid", soccerStorage.getVisitorTeamId());
//        parameters.addValue("vtn", soccerStorage.getVisitorTeamName());
//        parameters.addValue("vts", soccerStorage.getVisitorTeamScore());
//        parameters.addValue("e", soccerStorage.getEvents());

//        int rowsUpdated =  1;
//        if(rowsUpdated == 0){
//            throw new SportsException(SportsException.Culprit.UPDATE_FAILED, "SoccerMatch with id: "+soccerStorage.getId()+" not found");
//        }
        try{
            SoccerStorage match = this.getMatchById(soccerStorage.getId(), "soccer");
            match.setId(soccerStorage.getId());
            match.setDate(soccerStorage.getDate());
            match.setLeague(soccerStorage.getLeague());
            match.setLocalTeamId(soccerStorage.getLocalTeamId());
            match.setLocalTeamName(soccerStorage.getLocalTeamName());
            match.setLocalTeamScore(soccerStorage.getLocalTeamScore());
            match.setMinute(soccerStorage.getMinute());
            match.setStatus(soccerStorage.getStatus());
            match.setTime(soccerStorage.getTime());
            match.setVisitorTeamId(soccerStorage.getVisitorTeamId());
            match.setVisitorTeamName(soccerStorage.getVisitorTeamName());
            match.setVisitorTeamScore(soccerStorage.getVisitorTeamScore());
            match.setEvents(soccerStorage.getEvents());
            soccerInterface.save(match);
        }catch (Exception e){
            throw new SportsException(SportsException.Culprit.UPDATE_FAILED, "SoccerMatch with id: "+soccerStorage.getId()+" not found");
        }


    }


    @Override
    public void deleteSoccerMatch(Long id) throws SportsException {
//        String sql = "DELETE FROM soccer_match WHERE id=:id";
//        MapSqlParameterSource parameters = new MapSqlParameterSource();
//        parameters.addValue("id", id);

//        int rowsDeleted = 1;
//        if (rowsDeleted == 0){
//            throw new SportsException(SportsException.Culprit.NOT_FOUND, "SoccerMatch with id: "+id+" not found");
//        }
        try{
            soccerInterface.deleteById(id);
        }catch (Exception e){
            throw new SportsException(SportsException.Culprit.NOT_FOUND, "SoccerMatch with id: "+id+" not found");
        }
    }
}
