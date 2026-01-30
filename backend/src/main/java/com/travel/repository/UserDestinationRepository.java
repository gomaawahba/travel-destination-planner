package com.travel.repository;

import com.travel.entity.UserDestination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDestinationRepository extends JpaRepository<UserDestination, Long> {

    //Hard delete for delet relation with user and destenation
    void deleteByDestinationId(Long destinationId);


}
