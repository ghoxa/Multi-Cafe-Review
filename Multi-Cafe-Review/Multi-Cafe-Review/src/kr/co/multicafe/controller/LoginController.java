package kr.co.multicafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.UsersService;

@RestController
@RequestMapping(path="/api/login")
public class LoginController {
	
	@Autowired
	UsersService usersService;
	
	
	
	@PostMapping
	public void login(@RequestBody Users users) {
//		if (users.getUserId().contentEquals("cafeadmin"))
			
	}
	

}
