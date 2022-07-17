package com.rgenvio.rgenvio.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rgenvio.rgenvio.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	@Query("SELECT obj FROM Client obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Client> findClient(LocalDate min, LocalDate max, Pageable pageable);	
}
