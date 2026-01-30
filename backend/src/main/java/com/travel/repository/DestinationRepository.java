package com.travel.repository;

import com.travel.entity.Destination;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    Page<Destination> findByApprovedTrue(Pageable pageable);
    List<Destination> findByCountryContainingIgnoreCase(String keyword);
}
