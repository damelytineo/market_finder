package com.example.demo.controller;

import java.util.List;

import com.example.demo.entity.Market;
import com.example.demo.service.MarketService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class MarketController {

    private MarketService marketService;

    public MarketController(MarketService marketService) {
        this.marketService = marketService;
    }

    @GetMapping("/")
	public String index() {
		return "Greetings!";
	}

    @GetMapping("/markets")
	public List<Market> allMarkets() {
        return marketService.getAllMarkets();
	}

    @GetMapping("/markets/{id}")
	public Market marketsById(@PathVariable int id) {
        return marketService.getMarketByid(id);
	}

}
