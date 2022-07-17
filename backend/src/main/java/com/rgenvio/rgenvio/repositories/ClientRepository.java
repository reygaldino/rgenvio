package com.rgenvio.rgenvio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rgenvio.rgenvio.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
}
