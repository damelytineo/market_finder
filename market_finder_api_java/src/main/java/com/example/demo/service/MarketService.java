package com.example.demo.service;

import java.util.List;

import com.example.demo.dao.MarketDAO;
import com.example.demo.entity.Market;

import org.springframework.stereotype.Service;

@Service
public class MarketService {

    private MarketDAO marketDAO;

    public MarketService(MarketDAO marketDAO) {
        this.marketDAO = marketDAO;
    }

    public List<Market> getAllMarkets() {
        return marketDAO.findAll();
    }

    public Market getMarketByid(int id) {
        //If market not found, throw error?
        return marketDAO.findById(id).get();
    }

}
