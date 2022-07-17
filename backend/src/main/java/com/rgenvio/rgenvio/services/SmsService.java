package com.rgenvio.rgenvio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.rgenvio.rgenvio.entities.Client;
import com.rgenvio.rgenvio.repositories.ClientRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	@Autowired
	private ClientRepository clientRepository;

	public void sendSms(Long clientid) {
		
		Client client = clientRepository.findById(clientid).get();
		
		String date = client.getDate().getMonthValue() + "/" + client.getDate().getYear();
		
		String msg = "O cliente " + client.getSellerName() + " foi destaque em " + date + " pois comprou um total de: R$" + String.format("%.2f",client.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}