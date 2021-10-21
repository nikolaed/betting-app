package com.sports.betting.domain;


import javax.persistence.*;

@Entity
@Table(name = "soccer_match")
public class SoccerStorage {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "d")
    private String date;

    @Column(name = "lid")
    private Long league;

    @Column(name = "ltid")
    private Long localTeamId;

    @Column(name = "ltn")
    private String localTeamName;

    @Column(name = "lts")
    private Integer localTeamScore;

    @Column(name = "m")
    private Integer minute;

    @Column(name = "s")
    private String status;

    @Column(name = "t")
    private String time;

    @Column(name = "vtid")
    private Long visitorTeamId;

    @Column(name = "vtn")
    private String visitorTeamName;

    @Column(name = "vts")
    private Integer visitorTeamScore;

    @Column(name = "e")
    private String events;

    public SoccerStorage() {
    }

    public SoccerStorage(Long id, String date, Long league, Long localTeamId, String localTeamName, Integer localTeamScore, Integer minute, String status,
                         String time, Long visitorTeamId, String visitorTeamName, Integer visitorTeamScore, String events) {
        this.id = id;
        this.league = league;
        this.localTeamId = localTeamId;
        this.localTeamName = localTeamName;
        this.localTeamScore = localTeamScore;
        this.minute = minute;
        this.status = status;
        this.time = time;
        this.visitorTeamId = visitorTeamId;
        this.visitorTeamName = visitorTeamName;
        this.visitorTeamScore = visitorTeamScore;
        this.events = events;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public Long getLeague() {
        return league;
    }

    public void setLeague(Long league) {
        this.league = league;
    }


    public Long getLocalTeamId() {
        return localTeamId;
    }

    public void setLocalTeamId(Long localTeamId) {
        this.localTeamId = localTeamId;
    }


    public String getLocalTeamName() {
        return localTeamName;
    }

    public void setLocalTeamName(String localTeamName) {

        if(localTeamName == null)
            return;
        this.localTeamName = localTeamName;
    }


    public Integer getLocalTeamScore() {
        return localTeamScore;
    }

    public void setLocalTeamScore(Integer localTeamScore) {
        this.localTeamScore = localTeamScore;
    }


    public Integer getMinute() {
        return minute;
    }

    public void setMinute(Integer minute) {
        this.minute = minute;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }


    public Long getVisitorTeamId() {
        return visitorTeamId;
    }

    public void setVisitorTeamId(Long visitorTeamId) {
        this.visitorTeamId = visitorTeamId;
    }


    public String getVisitorTeamName() {
        return visitorTeamName;
    }

    public void setVisitorTeamName(String visitorTeamName) {
        this.visitorTeamName = visitorTeamName;
    }


    public Integer getVisitorTeamScore() {
        return visitorTeamScore;
    }

    public void setVisitorTeamScore(Integer visitorTeamScore) {
        this.visitorTeamScore = visitorTeamScore;
    }


    public String getEvents() {
        return events;
    }

    public void setEvents(String events) {
        this.events = events;
    }

    public boolean hasEvents() {
        return events!=null;
    }
}
