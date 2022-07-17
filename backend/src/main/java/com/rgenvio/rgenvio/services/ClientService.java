package com.rgenvio.rgenvio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rgenvio.rgenvio.entities.Client;
import com.rgenvio.rgenvio.repositories.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository repository;
	
	public List<Client> findClients(){
		return repository.findAll();
		
	}
}
