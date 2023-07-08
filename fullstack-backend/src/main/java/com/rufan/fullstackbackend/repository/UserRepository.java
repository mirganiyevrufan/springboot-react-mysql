package com.rufan.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rufan.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
