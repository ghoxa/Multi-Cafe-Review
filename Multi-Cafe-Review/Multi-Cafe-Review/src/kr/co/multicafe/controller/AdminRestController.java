package kr.co.multicafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.multicafe.dto.Admin;
import kr.co.multicafe.dto.Cafe;
import kr.co.multicafe.dto.Menu;
import kr.co.multicafe.intercepter.MemberType;
import kr.co.multicafe.intercepter.Permission;
import kr.co.multicafe.service.CafeService;
import kr.co.multicafe.service.MenuService;
import kr.co.multicafe.service.UsersService;


@RestController 
@RequestMapping(path="/api/admin")
public class AdminRestController {
	
//	@Autowired 
//	private CafeService cafeService;
//	
//	@Autowired 
//	private MenuService menuService;
//	
//	@Autowired
//	private UsersService userService;
//	
//	//카페 추가
//	@Permission(authority=MemberType.ADMIN)
//	@PostMapping
//	public void insertCafe(@RequestBody Cafe cafe) {
//		cafeService.insertCafe(cafe);
//	}
//	
//	//카페 삭제
//	@DeleteMapping("/cafe/{cafeId}")
//	public void deleteCafe(@PathVariable(name="cafeId")int cafeId) {
//		cafeService.deleteCafe(cafeId);
//	}
//	
//	
//	//메뉴 추가
//	@PostMapping
//	public void insertMenu(@RequestBody Menu menu) {
//		menuService.insertMenu(menu);
//	}
//	
//	//메뉴 삭제
//	@DeleteMapping("/menu/{menuId}")
//	public void deleteMenu(@PathVariable(name="menuId")int menuId) {
//		menuService.deleteMenu(menuId);
//	}
//	
////	메뉴 업데이트
//	
//	//회원 삭제
//	@DeleteMapping("/user/{userId}")
//	public void deleteUser(@PathVariable(name="userId")String userId) {
//		//usersService.deleteUser(userId);
//	}
}
