package kr.co.multicafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.UsersService;
@CrossOrigin("*")
@RestController
@RequestMapping(path="/api/register")
public class RegisterRestController {
	
	@Autowired
	private UsersService usersService;
	

	@PostMapping
	public int insertUser(@RequestBody Users user) {
		return usersService.insertUser(user);
	}
	
	@GetMapping("/{id}/check")
	public boolean checkIdForRegister(@PathVariable String id) {
		if (usersService.getAdmin().getAdminId().equals(id)) {
			return false;
		}
		if (usersService.getUser(id) == null) {
			return true;
		}
		return false;
	}

}
