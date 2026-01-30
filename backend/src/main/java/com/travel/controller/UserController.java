package com.travel.controller;


import com.travel.dto.DestinationResponseDTO;
import com.travel.dto.UserDestinationResponseDTO;
import com.travel.dto.UserResponseDTO;
import com.travel.entity.Destination;
import com.travel.entity.User;
import com.travel.entity.UserDestination;
import com.travel.repository.UserDestinationRepository;
import com.travel.repository.UserRepository;
import com.travel.service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/destinations")
public class UserController {

    @Autowired
    private DestinationService destinationService;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private UserDestinationRepository userDestRepo;

    @GetMapping
    public Page<Destination> getAll(@RequestParam int page, @RequestParam int size) {
        return destinationService.getAll(page, size);
    }

    @GetMapping("/search")
    public java.util.List<Destination> search(@RequestParam String keyword) {
        return destinationService.search(keyword);
    }

    @PostMapping("/{id}/want-to-visit")
    public UserDestinationResponseDTO markWantToVisit(@PathVariable Long id, @RequestParam Long userId) {
        Optional<Destination> destOpt = destinationService.getAll(0, Integer.MAX_VALUE)
                .getContent().stream()
                .filter(d -> d.getId().equals(id))
                .findFirst();

        Optional<User> userOpt = userRepo.findById(userId);

        if (destOpt.isPresent() && userOpt.isPresent()) {
            UserDestination ud = new UserDestination();
            ud.setDestination(destOpt.get());
            ud.setUser(userOpt.get());
            ud.setWantToVisit(true);
            UserDestination saved = userDestRepo.save(ud);


            UserDestinationResponseDTO response = new UserDestinationResponseDTO();

            UserResponseDTO userDto = new UserResponseDTO();
            userDto.setId(saved.getUser().getId());
            userDto.setUsername(saved.getUser().getUsername());
            userDto.setRole(saved.getUser().getRole());

            DestinationResponseDTO destDto = new DestinationResponseDTO();
            destDto.setId(saved.getDestination().getId());
            destDto.setCountry(saved.getDestination().getCountry());
            destDto.setCapital(saved.getDestination().getCapital());
            destDto.setRegion(saved.getDestination().getRegion());
            destDto.setPopulation(saved.getDestination().getPopulation());
            destDto.setCurrency(saved.getDestination().getCurrency());
            destDto.setFlagUrl(saved.getDestination().getFlagUrl());
            destDto.setApproved(saved.getDestination().isApproved());

            response.setId(saved.getId());
            response.setUser(userDto);
            response.setDestination(destDto);
            response.setWantToVisit(saved.isWantToVisit());

            return response;
        }
        return null;
    }

}
