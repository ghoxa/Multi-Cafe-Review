package kr.co.multicafe.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import kr.co.multicafe.dto.Admin;
import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.UsersService;

@RestController
@RequestMapping(path="/api/login")
public class LoginController {
	
	@Autowired
	UsersService usersService;
	
	@PostMapping
	public Users login(@RequestBody Users users, HttpSession session) {
		Admin admin = (Admin)usersService.loginAdmin(users.getUserId(), users.getPwd());
		Users user = (Users)usersService.loginUser(users.getUserId(), users.getPwd());
		if (admin != null) {
			session.setAttribute("admin", admin);
			System.out.println(session.getAttribute("admin"));
			return new Users(admin.getAdminId(), admin.getPwd());
		}
		if (user != null) {
			session.setAttribute("user", user);
			System.out.println(session.getAttribute("user"));
			return user;
		}
		return user;
	}
	
	@GetMapping
	public void logout(SessionStatus status, HttpSession session) {
		if (session.getAttribute("admin") != null || session.getAttribute("user") != null) {
			session.removeAttribute("admin");
			session.removeAttribute("user");
			session.invalidate();
		}
	}

}
