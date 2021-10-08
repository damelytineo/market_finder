package com.example.demo.dao;

import com.example.demo.entity.Market;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketDAO extends JpaRepository<Market, Integer> {
    
}