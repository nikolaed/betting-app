package com.sports.betting.dao;

import com.sports.betting.domain.DAOUser;
import com.sports.betting.domain.UserDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
    DAOUser findByUsername(String username);

    DAOUser save(UserDTO user);
}