package kr.co.multicafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.UsersService;

@RestController
@RequestMapping(path="/api/register")
public class RegisterRestController {
	
	@Autowired
	private UsersService usersService;
	

	@PostMapping
	public int insertUser(@RequestBody Users user) {
		return usersService.insertUser(user);
	}
	
	@PostMapping("/check")
	public boolean checkIdForRegister(@RequestBody String id) {
		if (usersService.getAdmin().getAdminId().equals(id)) {
			return false;
		}
		if (usersService.checkIdForRegister(id) == null) {
			return true;
		}
		return false;
	}

}
