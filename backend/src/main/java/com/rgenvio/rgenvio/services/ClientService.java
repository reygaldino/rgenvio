package com.rgenvio.rgenvio.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.rgenvio.rgenvio.entities.Client;
import com.rgenvio.rgenvio.repositories.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository repository;
	
	public Page<Client> findClients(String minDate,String maxDate,Pageable pageable){
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusYears(1) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		return repository.findClient(min,max,pageable);
		
	}
}
