package com.rgenvio.rgenvio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rgenvio.rgenvio.entities.Client;
import com.rgenvio.rgenvio.services.ClientService;

@RestController
@RequestMapping(value = "/client")
public class ClientController {
	
	@Autowired
	private ClientService service;

	@GetMapping
	public Page<Client> findClient(
			@RequestParam(value = "minDate",defaultValue = "") String minDate, 
			@RequestParam(value = "maxDate",defaultValue = "") String maxDate ,
			Pageable pageable){
		return service.findClients(minDate,maxDate,pageable);
	}
}
