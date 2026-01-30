package com.travel.service;

import com.travel.dto.DestinationDTO;
import com.travel.entity.Destination;
import com.travel.repository.DestinationRepository;
import com.travel.repository.UserDestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DestinationService {

    @Autowired
    private DestinationRepository repo;
    @Autowired
    private UserDestinationRepository userDestinationRepo;

    public Destination addDestination(DestinationDTO dto) {
        Destination d = new Destination();
        d.setCountry(dto.getCountry());
        d.setCapital(dto.getCapital());
        d.setRegion(dto.getRegion());
        d.setPopulation(dto.getPopulation());
        d.setCurrency(dto.getCurrency());
        d.setFlagUrl(dto.getFlagUrl());
        d.setApproved(true);
        return repo.save(d);
    }

    public List<Destination> search(String keyword) {
        return repo.findByCountryContainingIgnoreCase(keyword);
    }

    public List<Destination> getAllDestinations() {
        return repo.findAll();
    }

    public Page<Destination> getAll(int page, int size) {
        return repo.findByApprovedTrue(PageRequest.of(page, size));
    }

    @Transactional
    public void delete(Long id) {
        userDestinationRepo.deleteByDestinationId(id);


        repo.deleteById(id);
    }

    public void bulkAdd(List<DestinationDTO> list) {
        list.forEach(this::addDestination);
    }

}
