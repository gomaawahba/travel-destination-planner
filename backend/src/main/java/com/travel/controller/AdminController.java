package com.travel.controller;

import com.travel.dto.DestinationDTO;
import com.travel.entity.Destination;
import com.travel.service.DestinationService;
import com.travel.service.RestCountriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private DestinationService destinationService;

    @Autowired
    private RestCountriesService restCountriesService;

    @GetMapping("/fetch-destinations")
    public List<DestinationDTO> fetchFromAPI() {
        return restCountriesService.fetchCountries();
    }

    @GetMapping("/destinations/all")
    public List<Destination> getAllDestinations() {
        return destinationService.getAllDestinations();
    }

    @PostMapping("/destinations")
    public Destination add(@RequestBody DestinationDTO dto) {
        return destinationService.addDestination(dto);
    }

    @PostMapping("/destinations/bulk")
    public void bulkAdd(@RequestBody List<DestinationDTO> list) {
        destinationService.bulkAdd(list);
    }

    @DeleteMapping("/destinations/{id}")
    public void delete(@PathVariable Long id) {
        destinationService.delete(id);
    }
}
