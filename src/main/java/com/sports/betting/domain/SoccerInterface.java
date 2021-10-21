package com.sports.betting.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SoccerInterface extends JpaRepository<SoccerStorage, Long> {

    @Query("SELECT match FROM SoccerStorage match WHERE match.id IN ?1")
    List<SoccerStorage> findByIdIn(List<Long> ids);

    @Query("SELECT match FROM SoccerStorage match WHERE match.league = ?1 AND match.date =?2")
    List<SoccerStorage> findByLidAndD(Long league, String date);

    @Query("SELECT match FROM SoccerStorage match WHERE match.league = ?1 AND (match.date BETWEEN ?2 AND ?3)")
    List<SoccerStorage> findByLidAndDBetween(Long league, String startDate, String endDate);

    @Query("SELECT match FROM SoccerStorage match WHERE match.date = ?1")
    List<SoccerStorage> findByD(String date);

    @Query("SELECT match FROM SoccerStorage match WHERE match.status = ?1")
    List<SoccerStorage> findByS(String status);

    @Query("SELECT match FROM SoccerStorage match WHERE match.status = ?1 AND match.league = ?2")
    List<SoccerStorage> findBySAndLid(String status, Long leagueId);
}
