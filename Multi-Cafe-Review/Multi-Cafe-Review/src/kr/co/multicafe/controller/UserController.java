package kr.co.multicafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import kr.co.multicafe.dto.Users;
import kr.co.multicafe.service.MenuService;

@RestController
@RequestMapping(path="/api/user")
public class UserController {
	
	@Autowired
	private MenuService menuService;
	
	@GetMapping("/{menuId}/like")
	public void updateGood(@SessionAttribute("user") Users users, @PathVariable int menuId) {
//		menuService.insertOrDeleteLike(UserUtil.getCurrentUserId(), menuId);
		menuService.insertOrDeleteLike(users.getUserId(), menuId);
	}

}
