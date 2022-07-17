package com.rgenvio.rgenvio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rgenvio.rgenvio.entities.Client;
import com.rgenvio.rgenvio.services.ClientService;

@RestController
@RequestMapping(value = "/client")
public class ClientController {
	
	@Autowired
	private ClientService service;

	@GetMapping
	public List<Client> findClient(){
		return service.findClients();
	}
}
