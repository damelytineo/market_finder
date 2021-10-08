package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "markets")
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id;
    private String name;
    private String borough;
    @Column(name = "street_address")
    private String streetAddress;
    private int district;
    private double latitude;
    private double longitude;
    @Column(name = "days_of_operation")
    private String daysOfOperation;
    private String hours;
    @Column(name = "season_dates")
    private String seasonDates;

    public Market() {
    }

    public Market(Integer id, String name, String borough, String streetAddress, int district, Float latitude,
            Float longitude, String daysOfOperation, String hours, String seasonDates) {
        this.id = id;
        this.name = name;
        this.borough = borough;
        this.streetAddress = streetAddress;
        this.district = district;
        this.latitude = latitude;
        this.longitude = longitude;
        this.daysOfOperation = daysOfOperation;
        this.hours = hours;
        this.seasonDates = seasonDates;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBorough() {
        return borough;
    }

    public void setBorough(String borough) {
        this.borough = borough;
    }

    public String getStreetAddresString() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public Integer getDistrict() {
        return district;
    }

    public void setDistrict(Integer district) {
        this.district = district;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getDaysOfOperation() {
        return daysOfOperation;
    }

    public void setDaysOfOperation(String daysOfOperation) {
        this.daysOfOperation = daysOfOperation;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getSeasonDates() {
        return seasonDates;
    }

    public void setSeasonDates(String seasonDates) {
        this.seasonDates = seasonDates;
    }
    
}